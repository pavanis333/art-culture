import { useState, useEffect, useCallback } from 'react'
import data from './data'

const topicsData = data.artCultureData
const quizQuestions = data.quizQuestions

// ─── SRS helpers (simplified SM-2) ──────────────────────────────────────────
const SRS_KEY = 'artCultureSRS_v2'
const QUIZ_KEY = 'artCultureQuizState'
const PROGRESS_KEY = 'artCultureProgress'

function loadSRS() {
  try { return JSON.parse(localStorage.getItem(SRS_KEY)) || {} } catch { return {} }
}

function saveSRS(srs) {
  localStorage.setItem(SRS_KEY, JSON.stringify(srs))
}

// rating: 0=Again, 1=Hard, 2=Good, 3=Easy
function calcNextSRS(card = {}, rating) {
  const now = Date.now()
  let { interval = 0, easeFactor = 2.5, repetitions = 0 } = card

  if (rating === 0) {
    // Again — reset
    interval = 1
    repetitions = 0
    easeFactor = Math.max(1.3, easeFactor - 0.2)
  } else if (rating === 1) {
    // Hard
    interval = Math.max(1, Math.round(interval * 1.2))
    easeFactor = Math.max(1.3, easeFactor - 0.15)
  } else if (rating === 2) {
    // Good
    if (repetitions === 0) interval = 1
    else if (repetitions === 1) interval = 4
    else interval = Math.round(interval * easeFactor)
    repetitions += 1
  } else {
    // Easy
    if (repetitions === 0) interval = 4
    else interval = Math.round(interval * easeFactor * 1.3)
    easeFactor = Math.min(2.5, easeFactor + 0.15)
    repetitions += 1
  }

  return {
    interval,
    easeFactor,
    repetitions,
    lastReview: now,
    dueDate: now + interval * 24 * 60 * 60 * 1000,
  }
}

function cardStatus(cardSRS) {
  if (!cardSRS) return 'new'
  const now = Date.now()
  return cardSRS.dueDate <= now ? 'due' : 'review'
}

function getSRSCounts(cardIds, srs) {
  let newCount = 0, dueCount = 0, reviewCount = 0
  for (const id of cardIds) {
    const s = cardStatus(srs[id])
    if (s === 'new') newCount++
    else if (s === 'due') dueCount++
    else reviewCount++
  }
  return { newCount, dueCount, reviewCount }
}

function intervalLabel(rating, card) {
  const next = calcNextSRS(card, rating)
  const d = next.interval
  if (d < 1) return '<1d'
  if (d === 1) return '1d'
  if (d < 7) return `${d}d`
  if (d < 30) return `${Math.round(d / 7)}w`
  return `${Math.round(d / 30)}mo`
}

// Sort cards: due first, then new, then scheduled
function sortedCardIndices(cards, srs) {
  const now = Date.now()
  return [...Array(cards.length).keys()].sort((a, b) => {
    const sa = srs[cards[a].id]
    const sb = srs[cards[b].id]
    const getPriority = (s) => {
      if (!s) return 1 // new
      if (s.dueDate <= now) return 0 // due
      return 2 // scheduled
    }
    const pa = getPriority(sa)
    const pb = getPriority(sb)
    if (pa !== pb) return pa - pb
    // within due: sort by most overdue first
    if (pa === 0) return (sa?.dueDate || 0) - (sb?.dueDate || 0)
    // within scheduled: sort by soonest due
    if (pa === 2) return (sa?.dueDate || 0) - (sb?.dueDate || 0)
    return 0
  })
}

// ─── Topic map ───────────────────────────────────────────────────────────────
const TOPICS = [
  { key: 'vedic',      label: 'Vedic Literature',      icon: '📖', category: 'Vedic Literature' },
  { key: 'drama',      label: 'Sanskrit Drama',         icon: '🎭', category: 'Sanskrit Drama' },
  { key: 'buddhist',   label: 'Buddhist Texts',         icon: '🧘', category: 'Buddhist Texts' },
  { key: 'religious',  label: 'Religious Literature',   icon: '🕉️', category: 'Religious Literature' },
  { key: 'dravidian',  label: 'Dravidian Literature',   icon: '📜', category: 'Dravidian Literature' },
  { key: 'medieval',   label: 'Medieval Literature',    icon: '🏰', category: 'Medieval Literature' },
  { key: 'modern',     label: 'Modern Literature',      icon: '📚', category: 'Modern Literature' },
  { key: 'unesco',     label: 'UNESCO Heritage',        icon: '🏛️', category: 'UNESCO Heritage' },
  { key: 'books',      label: 'Books & Authors',        icon: '📚', category: 'Books & Authors' },
  { key: 'travellers', label: 'Foreign Travellers',     icon: '🌏', category: 'Foreign Travellers' },
]

function getTopicLabel(key) {
  return TOPICS.find(t => t.key === key)?.label || key
}

function filterByTopic(items, selectedTopic) {
  if (!selectedTopic) return items
  const t = TOPICS.find(t => t.key === selectedTopic)
  return t ? items.filter(x => x.category === t.category) : items
}

// ─── Main App ────────────────────────────────────────────────────────────────
function App() {
  const [selectedTopic, setSelectedTopic]   = useState(null)
  const [mode, setMode]                     = useState(null)
  const [currentIndex, setCurrentIndex]     = useState(0)     // index into sorted/filtered array
  const [score, setScore]                   = useState(0)
  const [quizAnswers, setQuizAnswers]       = useState([])
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult]         = useState(false)
  const [masteredTopics, setMasteredTopics] = useState([])
  const [filter, setFilter]                 = useState('all')
  const [flipped, setFlipped]               = useState(false)
  const [showNavigator, setShowNavigator]   = useState(false)
  const [srs, setSRS]                       = useState({})

  // Load persisted state on mount
  useEffect(() => {
    setSRS(loadSRS())
    try {
      const p = JSON.parse(localStorage.getItem(PROGRESS_KEY))
      if (p?.masteredTopics) setMasteredTopics(p.masteredTopics)
    } catch {}
  }, [])

  // Restore quiz state when entering quiz mode
  useEffect(() => {
    if (mode === 'quiz') {
      try {
        const qs = JSON.parse(localStorage.getItem(QUIZ_KEY))
        if (qs) {
          setCurrentIndex(qs.currentIndex || 0)
          setScore(qs.score || 0)
          setQuizAnswers(qs.quizAnswers || [])
          setSelectedAnswer(qs.quizAnswers?.[qs.currentIndex]?.selected ?? null)
        }
      } catch {}
    }
  }, [mode])

  // ── Persistence helpers ──
  const saveProgress = (mastered) => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify({ masteredTopics: mastered }))
  }

  const saveQuizState = useCallback((index, currentScore, answers) => {
    localStorage.setItem(QUIZ_KEY, JSON.stringify({ currentIndex: index, score: currentScore, quizAnswers: answers }))
  }, [])

  const updateSRS = (cardId, rating) => {
    const next = calcNextSRS(srs[cardId], rating)
    const updated = { ...srs, [cardId]: next }
    setSRS(updated)
    saveSRS(updated)
  }

  // ── Reset helpers ──
  const resetQuiz = () => {
    localStorage.removeItem(QUIZ_KEY)
    setCurrentIndex(0); setScore(0); setQuizAnswers([])
    setSelectedAnswer(null); setShowResult(false)
  }

  const resetMode = () => {
    setMode(null); setCurrentIndex(0); setFlipped(false)
    setScore(0); setQuizAnswers([]); setSelectedAnswer(null); setShowResult(false)
  }

  const resetFlashcardProgress = () => {
    if (!window.confirm('Reset all mastered cards for this topic?')) return
    const topicCards = getFilteredTopics()
    const names = topicCards.map(c => c.name)
    const updated = masteredTopics.filter(n => !names.includes(n))
    setMasteredTopics(updated)
    saveProgress(updated)
    setCurrentIndex(0)
    setFlipped(false)
  }

  const resetSRS = () => {
    if (!window.confirm('Reset all spaced repetition data? This cannot be undone.')) return
    const updated = {}
    setSRS(updated)
    saveSRS(updated)
  }

  // ── Filtered data ──
  const getFilteredTopics = () => {
    let filtered = filterByTopic(topicsData, selectedTopic)
    if (filter === 'high') filtered = filtered.filter(v => v.importance === 'HIGH')
    return filtered
  }

  const getFilteredQuiz = () => filterByTopic(quizQuestions, selectedTopic)

  // ── Quiz answer handler ──
  const handleQuizAnswer = (answerIndex) => {
    const filteredQuiz = getFilteredQuiz()
    if (!filteredQuiz[currentIndex]) return

    const correct = filteredQuiz[currentIndex].correct === answerIndex

    if (quizAnswers[currentIndex] !== undefined) {
      const newAnswers = [...quizAnswers]
      const wasCorrect = newAnswers[currentIndex].correct
      let newScore = score
      if (wasCorrect && !correct) newScore--
      if (!wasCorrect && correct) newScore++
      newAnswers[currentIndex] = { question: currentIndex, selected: answerIndex, correct }
      setQuizAnswers(newAnswers); setScore(newScore); setSelectedAnswer(answerIndex)
      saveQuizState(currentIndex, newScore, newAnswers)
      return
    }

    const newScore = correct ? score + 1 : score
    const newAnswers = [...quizAnswers, { question: currentIndex, selected: answerIndex, correct }]
    setQuizAnswers(newAnswers); if (correct) setScore(newScore); setSelectedAnswer(answerIndex)
    saveQuizState(currentIndex, newScore, newAnswers)
  }

  const nextQuizQuestion = () => {
    const filteredQuiz = getFilteredQuiz()
    if (currentIndex < filteredQuiz.length - 1) {
      const next = currentIndex + 1
      setCurrentIndex(next)
      setSelectedAnswer(quizAnswers[next]?.selected ?? null)
      saveQuizState(next, score, quizAnswers)
    } else if (quizAnswers.length === filteredQuiz.length) {
      setShowResult(true)
      localStorage.removeItem(QUIZ_KEY)
    }
  }

  const prevQuizQuestion = () => {
    if (currentIndex > 0) {
      const prev = currentIndex - 1
      setCurrentIndex(prev)
      setSelectedAnswer(quizAnswers[prev]?.selected ?? null)
      saveQuizState(prev, score, quizAnswers)
    }
  }

  const getScoreEmoji = () => {
    const pct = (score / getFilteredQuiz().length) * 100
    if (pct >= 90) return '🏆'
    if (pct >= 75) return '🌟'
    if (pct >= 60) return '👍'
    if (pct >= 50) return '😊'
    return '📚'
  }

  // ─────────────────────────────────────────────────────────────────────────
  // RENDER: Topic Menu
  // ─────────────────────────────────────────────────────────────────────────
  const renderTopicMenu = () => (
    <div className="mode-selector">
      {TOPICS.map(({ key, label, icon, category }) => {
        const cards = topicsData.filter(t => t.category === category)
        const quizCount = quizQuestions.filter(q => q.category === category).length
        const ids = cards.map(c => c.id)
        const { dueCount, newCount } = getSRSCounts(ids, srs)
        const hasDue = dueCount > 0
        const hasNew = newCount > 0
        return (
          <div key={key} className="mode-card" onClick={() => setSelectedTopic(key)}>
            <div className="mode-icon">{icon}</div>
            <h3>{label}</h3>
            <p>{cards.length} flashcards · {quizCount} quiz questions</p>
            {hasDue && <span className="due-badge">🔁 {dueCount} due</span>}
            {!hasDue && hasNew && <span className="due-badge" style={{background:'#1f6feb'}}>✨ {newCount} new</span>}
          </div>
        )
      })}
    </div>
  )

  // ─────────────────────────────────────────────────────────────────────────
  // RENDER: Mode Selector
  // ─────────────────────────────────────────────────────────────────────────
  const renderModeSelector = () => {
    const cards = getFilteredTopics()
    const ids = cards.map(c => c.id)
    const { dueCount, newCount } = getSRSCounts(ids, srs)
    return (
      <div className="mode-selector">
        <div className="mode-card" onClick={() => { resetMode(); setMode('flashcards') }}>
          <div className="mode-icon">🗂️</div>
          <h3>Flashcards</h3>
          <p>Learn with interactive flashcards</p>
          {dueCount > 0 && <span className="due-badge">🔁 {dueCount} due for review</span>}
          {dueCount === 0 && newCount > 0 && <span className="due-badge" style={{background:'#1f6feb'}}>✨ {newCount} new cards</span>}
        </div>
        <div className="mode-card" onClick={() => { resetMode(); setMode('browse') }}>
          <div className="mode-icon">📚</div>
          <h3>Browse Topics</h3>
          <p>Explore all topics with detailed information</p>
        </div>
        <div className="mode-card" onClick={() => { resetMode(); setMode('quiz') }}>
          <div className="mode-icon">❓</div>
          <h3>Quiz Mode</h3>
          <p>Test knowledge with UPSC-style MCQs</p>
        </div>
        <div className="mode-card" onClick={() => { resetMode(); setMode('progress') }}>
          <div className="mode-icon">📊</div>
          <h3>Progress</h3>
          <p>Track your learning & spaced repetition stats</p>
        </div>
      </div>
    )
  }

  // ─────────────────────────────────────────────────────────────────────────
  // RENDER: Flashcards (with SRS)
  // ─────────────────────────────────────────────────────────────────────────
  const renderFlashcards = () => {
    const cards = getFilteredTopics()
    if (cards.length === 0) return <p style={{color:'var(--text-secondary)'}}>No cards match this filter.</p>

    // Sort: due → new → scheduled
    const sortedIdxs = sortedCardIndices(cards, srs)
    const sortedCards = sortedIdxs.map(i => cards[i])
    const safeIndex = Math.min(currentIndex, sortedCards.length - 1)
    const topic = sortedCards[safeIndex]
    const isMastered = masteredTopics.includes(topic.name)
    const status = cardStatus(srs[topic.id])

    const nextCard = () => {
      if (safeIndex < sortedCards.length - 1) {
        setCurrentIndex(safeIndex + 1); setFlipped(false)
      }
    }
    const prevCard = () => {
      if (safeIndex > 0) {
        setCurrentIndex(safeIndex - 1); setFlipped(false)
      }
    }

    const handleSRS = (rating) => {
      updateSRS(topic.id, rating)
      // Auto-advance on good/easy
      if (rating >= 2 && safeIndex < sortedCards.length - 1) {
        setTimeout(() => { setCurrentIndex(safeIndex + 1); setFlipped(false) }, 300)
      } else {
        setFlipped(false)
      }
    }

    const markAsMastered = () => {
      if (masteredTopics.includes(topic.name)) {
        const updated = masteredTopics.filter(n => n !== topic.name)
        setMasteredTopics(updated); saveProgress(updated)
      } else {
        const updated = [...masteredTopics, topic.name]
        setMasteredTopics(updated); saveProgress(updated)
        nextCard()
      }
    }

    const ids = cards.map(c => c.id)
    const { dueCount, newCount, reviewCount } = getSRSCounts(ids, srs)

    const statusChipClass = status === 'new' ? 'srs-new' : status === 'due' ? 'srs-due' : 'srs-review'
    const statusChipLabel = status === 'new' ? '✨ New' : status === 'due' ? '🔁 Due' : '✅ Scheduled'

    return (
      <div>
        {/* SRS summary */}
        <div className="srs-stats">
          <span className="srs-stat-chip srs-chip-due">🔁 {dueCount} Due</span>
          <span className="srs-stat-chip srs-chip-new">✨ {newCount} New</span>
          <span className="srs-stat-chip srs-chip-review">✅ {reviewCount} Scheduled</span>
          <span className="srs-stat-chip srs-chip-total">📦 {cards.length} Total</span>
        </div>

        {/* Filter */}
        <div className="filter-section">
          <h3>Filter Cards</h3>
          <div className="filter-buttons">
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => { setFilter('all'); setCurrentIndex(0) }}>
              All ({cards.length})
            </button>
            <button className={`filter-btn ${filter === 'high' ? 'active' : ''}`}
              onClick={() => { setFilter('high'); setCurrentIndex(0) }}>
              High Priority
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="progress-bar">
          <div className="progress-fill"
            style={{ width: `${((safeIndex + 1) / sortedCards.length) * 100}%` }} />
        </div>

        {/* Flashcard */}
        <div className="flashcard">
          <div className={`flashcard-inner ${flipped ? 'flipped' : ''}`}
            onClick={() => setFlipped(!flipped)}>

            <div className="flashcard-front">
              <span className={`srs-status-chip ${statusChipClass}`}>{statusChipLabel}</span>
              <h2 style={{ fontSize: '2.4rem', marginBottom: '16px', color: 'var(--accent)' }}>
                {topic.name}
              </h2>
              <div style={{ fontSize: '1.2rem', color: 'var(--accent-light)', marginBottom: '12px' }}>
                {topic.category}
              </div>
              {topic.subcategory && (
                <div style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>{topic.subcategory}</div>
              )}
              <p className="flashcard-hint">👆 Tap to flip</p>
            </div>

            <div className="flashcard-back">
              <div style={{ textAlign: 'left', width: '100%' }}>
                <div className="topic-info"><strong>Category:</strong> {topic.category}</div>
                {topic.subcategory && <div className="topic-info"><strong>Type:</strong> {topic.subcategory}</div>}

                {topic.associatedTexts?.brahmanas && (
                  <div className="section-divider">
                    <strong style={{color:'var(--accent-light)'}}>Brahmanas:</strong>
                    <ul style={{margin:'6px 0',paddingLeft:'20px'}}>{topic.associatedTexts.brahmanas.map((x,i) => <li key={i}>{x}</li>)}</ul>
                  </div>
                )}
                {topic.associatedTexts?.aranyakas && (
                  <div className="section-divider">
                    <strong style={{color:'var(--accent-light)'}}>Aranyakas:</strong>
                    <ul style={{margin:'6px 0',paddingLeft:'20px'}}>{topic.associatedTexts.aranyakas.map((x,i) => <li key={i}>{x}</li>)}</ul>
                  </div>
                )}
                {topic.associatedTexts?.upanishads && (
                  <div className="section-divider">
                    <strong style={{color:'var(--accent-light)'}}>Upanishads:</strong>
                    <ul style={{margin:'6px 0',paddingLeft:'20px'}}>{topic.associatedTexts.upanishads.map((x,i) => <li key={i}>{x}</li>)}</ul>
                  </div>
                )}
                {topic.author && <div className="section-divider topic-info"><strong>Author:</strong> {topic.author}</div>}
                {topic.period && <div className="section-divider topic-info"><strong>Period:</strong> {topic.period}</div>}
                {topic.work && <div className="section-divider topic-info"><strong>Work:</strong> {topic.work}</div>}
                {topic.nationality && <div className="section-divider topic-info"><strong>Nationality:</strong> {topic.nationality}</div>}
                {topic.duration && <div className="section-divider topic-info"><strong>Duration:</strong> {topic.duration}</div>}
                {topic.reign && <div className="section-divider topic-info"><strong>Reign:</strong> {topic.reign}</div>}
                {topic.observation && (
                  <div className="section-divider">
                    <strong style={{color:'var(--accent-light)'}}>Observations:</strong>
                    <div className="topic-info" style={{marginTop:'4px'}}>{topic.observation}</div>
                  </div>
                )}
                {topic.description && (
                  <div className="section-divider">
                    <strong style={{color:'var(--accent-light)'}}>Description:</strong>
                    <div className="topic-info" style={{marginTop:'4px'}}>{topic.description}</div>
                  </div>
                )}
                {topic.upscRelevance && (
                  <div className="section-divider topic-info" style={{fontWeight:'bold',color:'var(--accent)'}}>
                    {topic.upscRelevance}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* SRS Rating Buttons (visible after flip) */}
        {flipped && (
          <>
            <p className="srs-hint">How well did you remember this?</p>
            <div className="srs-buttons">
              <button className="srs-btn srs-btn-again" onClick={(e) => { e.stopPropagation(); handleSRS(0) }}>
                <span className="srs-label">😣 Again</span>
                <span className="srs-interval">{intervalLabel(0, srs[topic.id])}</span>
              </button>
              <button className="srs-btn srs-btn-hard" onClick={(e) => { e.stopPropagation(); handleSRS(1) }}>
                <span className="srs-label">😓 Hard</span>
                <span className="srs-interval">{intervalLabel(1, srs[topic.id])}</span>
              </button>
              <button className="srs-btn srs-btn-good" onClick={(e) => { e.stopPropagation(); handleSRS(2) }}>
                <span className="srs-label">😊 Good</span>
                <span className="srs-interval">{intervalLabel(2, srs[topic.id])}</span>
              </button>
              <button className="srs-btn srs-btn-easy" onClick={(e) => { e.stopPropagation(); handleSRS(3) }}>
                <span className="srs-label">😄 Easy</span>
                <span className="srs-interval">{intervalLabel(3, srs[topic.id])}</span>
              </button>
            </div>
          </>
        )}

        {/* Nav controls */}
        <div className="controls" style={{marginTop: flipped ? '10px' : '20px'}}>
          <button className="btn btn-secondary" onClick={prevCard} disabled={safeIndex === 0}>
            ⬅️ Previous
          </button>
          <button className="btn btn-primary" onClick={markAsMastered}>
            {isMastered ? '✓ Mastered (unmark)' : '✓ Mark Mastered'}
          </button>
          <button className="btn btn-secondary" onClick={nextCard} disabled={safeIndex === sortedCards.length - 1}>
            Next ➡️
          </button>
        </div>

        <div className="card-counter">
          Card {safeIndex + 1} of {sortedCards.length}
          {isMastered && <span style={{marginLeft:'14px', color:'var(--success-text)'}}>✓ Mastered</span>}
        </div>

        {/* Reset buttons for flashcards */}
        <div className="controls" style={{marginTop:'16px'}}>
          <button className="btn btn-danger" onClick={resetFlashcardProgress}>
            🔄 Reset Mastered
          </button>
          <button className="btn btn-danger" onClick={resetSRS}>
            🗑️ Reset SRS Data
          </button>
        </div>
      </div>
    )
  }

  // ─────────────────────────────────────────────────────────────────────────
  // RENDER: Browse
  // ─────────────────────────────────────────────────────────────────────────
  const renderBrowse = () => {
    const cards = getFilteredTopics()
    return (
      <div>
        <div className="filter-section">
          <h3>Filter</h3>
          <div className="filter-buttons">
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
              All ({topicsData.length})
            </button>
            <button className={`filter-btn ${filter === 'high' ? 'active' : ''}`} onClick={() => setFilter('high')}>
              High Priority
            </button>
          </div>
        </div>

        <h2 style={{marginBottom:'20px', color:'var(--text-secondary)', fontSize:'1.3rem'}}>
          {cards.length} topic{cards.length !== 1 ? 's' : ''} found
        </h2>

        <div className="artCultureData-grid">
          {cards.map(topic => (
            <div key={topic.id} className="topic-card">
              <h3>{topic.name}</h3>
              <div className="tags">
                <span className="tag">{topic.category}</span>
                <span className={`tag ${topic.importance === 'HIGH' ? 'high' : ''}`}>{topic.importance}</span>
              </div>
              {topic.associatedTexts && (
                <div style={{marginTop:'8px'}}>
                  {topic.associatedTexts.brahmanas && <div className="topic-info"><strong>Brahmanas:</strong> {topic.associatedTexts.brahmanas.length}</div>}
                  {topic.associatedTexts.aranyakas && <div className="topic-info"><strong>Aranyakas:</strong> {topic.associatedTexts.aranyakas.length}</div>}
                  {topic.associatedTexts.upanishads && <div className="topic-info"><strong>Upanishads:</strong> {topic.associatedTexts.upanishads.length}</div>}
                </div>
              )}
              {topic.author && <div className="topic-info" style={{marginTop:'8px'}}><strong>Author:</strong> {topic.author}{topic.period ? ` · ${topic.period}` : ''}</div>}
              {topic.work && <div className="topic-info" style={{marginTop:'8px'}}><strong>Work:</strong> {topic.work}</div>}
              {topic.nationality && (
                <div style={{marginTop:'8px'}}>
                  <div className="topic-info"><strong>Nationality:</strong> {topic.nationality}</div>
                  {topic.duration && <div className="topic-info"><strong>Duration:</strong> {topic.duration}</div>}
                  {topic.reign && <div className="topic-info"><strong>Reign:</strong> {topic.reign}</div>}
                </div>
              )}
              {(topic.description || topic.observation) && (
                <div className="topic-info" style={{marginTop:'8px', fontStyle:'italic', color:'var(--text-muted)'}}>
                  {(topic.description || topic.observation)?.substring(0, 100)}…
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }

  // ─────────────────────────────────────────────────────────────────────────
  // RENDER: Quiz
  // ─────────────────────────────────────────────────────────────────────────
  const renderQuiz = () => {
    const filteredQuiz = getFilteredQuiz()

    if (!filteredQuiz || filteredQuiz.length === 0) {
      return (
        <div style={{textAlign:'center', padding:'40px'}}>
          <h2 style={{color:'var(--accent)', fontSize:'1.8rem'}}>No Quiz Questions Yet</h2>
          <p style={{fontSize:'1.2rem', marginTop:'20px', color:'var(--text-secondary)'}}>
            Quiz questions for this topic are coming soon!
          </p>
          <button className="btn btn-secondary" onClick={resetMode} style={{marginTop:'30px'}}>
            ← Back to Modes
          </button>
        </div>
      )
    }

    if (showResult) {
      const pct = ((score / filteredQuiz.length) * 100).toFixed(0)
      return (
        <div className="result-screen">
          <div className="result-emoji">{getScoreEmoji()}</div>
          <h2 style={{fontSize:'2rem', color:'var(--text-primary)'}}>Quiz Complete!</h2>
          <div className="result-score">{score} / {filteredQuiz.length}</div>
          <p style={{fontSize:'1.4rem', color:'var(--text-secondary)', marginBottom:'30px'}}>
            Score: {pct}%
          </p>

          <div style={{textAlign:'left', marginBottom:'30px'}}>
            <h3 style={{marginBottom:'16px', color:'var(--text-primary)', fontSize:'1.3rem'}}>Review Answers</h3>
            {quizAnswers.map((answer, idx) => (
              <div key={idx} className={`answer-feedback ${answer.correct ? 'correct' : 'incorrect'}`}
                style={{marginBottom:'12px'}}>
                <p style={{fontWeight:'bold', marginBottom:'6px'}}>
                  Q{idx + 1}: {filteredQuiz[idx]?.question}
                </p>
                <p className="explanation">
                  {answer.correct ? '✓ Correct!' : `✗ ${filteredQuiz[idx]?.explanation}`}
                </p>
              </div>
            ))}
          </div>

          <div className="controls">
            <button className="btn btn-primary" onClick={resetQuiz}>🔄 Retry Quiz</button>
            <button className="btn btn-secondary" onClick={resetMode}>🏠 Back to Home</button>
          </div>
        </div>
      )
    }

    const question = filteredQuiz[currentIndex]

    const jumpToQuestion = (idx) => {
      setCurrentIndex(idx)
      setSelectedAnswer(quizAnswers[idx]?.selected ?? null)
      saveQuizState(idx, score, quizAnswers)
      setShowNavigator(false)
    }

    return (
      <div>
        <div className="progress-bar">
          <div className="progress-fill"
            style={{ width: `${(quizAnswers.length / filteredQuiz.length) * 100}%` }} />
        </div>

        <div style={{textAlign:'center', margin:'14px 0'}}>
          <button className="btn btn-secondary" onClick={() => setShowNavigator(true)}>
            📋 Navigator ({quizAnswers.length}/{filteredQuiz.length})
          </button>
        </div>

        {/* Navigator Overlay */}
        {showNavigator && (
          <div className="navigator-overlay" onClick={() => setShowNavigator(false)}>
            <div className="navigator-box" onClick={e => e.stopPropagation()}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px'}}>
                <h3>Question Navigator</h3>
                <button onClick={() => setShowNavigator(false)}
                  style={{background:'none',border:'none',fontSize:'1.5rem',cursor:'pointer',color:'var(--text-primary)'}}>
                  ✕
                </button>
              </div>
              <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(52px, 1fr))', gap:'10px'}}>
                {filteredQuiz.map((_, idx) => {
                  const isAnswered = quizAnswers[idx] !== undefined
                  const isCurrent = idx === currentIndex
                  const isCorrect = isAnswered && quizAnswers[idx].correct
                  return (
                    <button key={idx} onClick={() => jumpToQuestion(idx)} style={{
                      padding:'12px',
                      border: isCurrent ? '3px solid var(--accent)' : '2px solid var(--border)',
                      borderRadius:'8px',
                      background: isCurrent ? 'var(--accent-muted)'
                        : isAnswered ? (isCorrect ? '#0f2d16' : '#2d0a0a') : 'var(--bg-card)',
                      cursor:'pointer', fontSize:'1rem',
                      fontWeight: isCurrent ? 'bold' : 'normal',
                      color: isAnswered ? (isCorrect ? '#56d364' : '#f85149') : 'var(--text-primary)',
                      transition:'all 0.2s'
                    }}>
                      {idx + 1}
                    </button>
                  )
                })}
              </div>
              <div style={{marginTop:'20px', textAlign:'center'}}>
                <button className="btn btn-primary" onClick={() => setShowNavigator(false)}>Close</button>
              </div>
            </div>
          </div>
        )}

        {/* Question */}
        <div className="quiz-question">
          <h3>Question {currentIndex + 1} of {filteredQuiz.length}</h3>
          <p>{question.question}</p>

          <div className="quiz-options">
            {question.options.map((option, idx) => {
              let cls = 'quiz-option'
              if (selectedAnswer !== null) {
                if (idx === question.correct) cls += ' correct'
                else if (idx === selectedAnswer) cls += ' incorrect'
              }
              return (
                <div key={idx} className={cls} onClick={() => handleQuizAnswer(idx)}>
                  <strong>{String.fromCharCode(65 + idx)}.</strong> {option}
                </div>
              )
            })}
          </div>

          {selectedAnswer !== null && (
            <div className={`answer-feedback ${selectedAnswer === question.correct ? 'correct' : 'incorrect'}`}>
              <p style={{fontWeight:'bold', marginBottom:'8px'}}>
                {selectedAnswer === question.correct ? '✓ Correct!' : '✗ Incorrect'}
              </p>
              <p className="explanation">{question.explanation}</p>
            </div>
          )}
        </div>

        <div style={{textAlign:'center', marginTop:'14px', color:'var(--text-muted)', fontSize:'1rem'}}>
          Score: {score} / {quizAnswers.length || 0}
        </div>

        {/* Quiz navigation */}
        <div className="controls" style={{marginTop:'20px'}}>
          <button className="btn btn-secondary" onClick={prevQuizQuestion} disabled={currentIndex === 0}>
            ⬅️ Previous
          </button>
          <button className="btn btn-primary" onClick={nextQuizQuestion}
            disabled={currentIndex === filteredQuiz.length - 1 && quizAnswers.length < filteredQuiz.length}>
            {currentIndex === filteredQuiz.length - 1 && quizAnswers.length === filteredQuiz.length
              ? '✓ Finish Quiz' : 'Next ➡️'}
          </button>
        </div>

        {/* Quiz reset/home */}
        <div className="controls" style={{marginTop:'12px'}}>
          <button className="btn btn-danger" onClick={resetQuiz}>🔄 Reset Quiz</button>
          <button className="btn btn-secondary" onClick={resetMode}>🏠 Back to Home</button>
        </div>
      </div>
    )
  }

  // ─────────────────────────────────────────────────────────────────────────
  // RENDER: Progress
  // ─────────────────────────────────────────────────────────────────────────
  const renderProgress = () => {
    const allIds = topicsData.map(t => t.id)
    const { dueCount, newCount, reviewCount } = getSRSCounts(allIds, srs)
    const totalTopics = topicsData.length
    const masteredCount = masteredTopics.length
    const highPriority = topicsData.filter(c => c.importance === 'HIGH').length
    const pct = ((masteredCount / totalTopics) * 100).toFixed(0)

    // Per-category breakdown
    const categoryStats = TOPICS.map(({ key, label, icon, category }) => {
      const cards = topicsData.filter(t => t.category === category)
      const mastered = cards.filter(c => masteredTopics.includes(c.name)).length
      const ids = cards.map(c => c.id)
      const { dueCount: d, newCount: n } = getSRSCounts(ids, srs)
      return { key, label, icon, total: cards.length, mastered, due: d, new: n }
    })

    return (
      <div>
        <h2 style={{marginBottom:'24px', color:'var(--text-primary)', fontSize:'2rem'}}>Your Progress</h2>

        {/* Top stats */}
        <div className="stats">
          <div className="stat-card"><h4>Total Cards</h4><div className="value">{totalTopics}</div></div>
          <div className="stat-card"><h4>Mastered</h4><div className="value" style={{color:'var(--success-text)'}}>{masteredCount}</div></div>
          <div className="stat-card"><h4>Remaining</h4><div className="value" style={{color:'var(--warning)'}}>{totalTopics - masteredCount}</div></div>
          <div className="stat-card"><h4>High Priority</h4><div className="value">{highPriority}</div></div>
        </div>

        {/* SRS stats */}
        <div className="stats" style={{marginTop:'0'}}>
          <div className="stat-card"><h4>Due for Review</h4><div className="value" style={{color:'var(--accent)'}}>{dueCount}</div></div>
          <div className="stat-card"><h4>New Cards</h4><div className="value" style={{color:'#58a6ff'}}>{newCount}</div></div>
          <div className="stat-card"><h4>Scheduled</h4><div className="value" style={{color:'var(--success-text)'}}>{reviewCount}</div></div>
        </div>

        {/* Overall progress bar */}
        <div style={{marginBottom:'30px', marginTop:'10px'}}>
          <h3 style={{marginBottom:'12px', color:'var(--text-secondary)'}}>Overall Mastery</h3>
          <div className="progress-bar" style={{height:'28px'}}>
            <div className="progress-fill" style={{
              width:`${pct}%`, display:'flex', alignItems:'center',
              justifyContent:'center', color:'#fff', fontWeight:'bold', fontSize:'0.95rem'
            }}>
              {pct > 10 ? `${pct}%` : ''}
            </div>
          </div>
          <div style={{textAlign:'right', marginTop:'6px', color:'var(--text-muted)', fontSize:'0.9rem'}}>{pct}%</div>
        </div>

        {/* Per-category breakdown */}
        <h3 style={{marginBottom:'16px', color:'var(--text-secondary)'}}>Category Breakdown</h3>
        <div style={{display:'flex', flexDirection:'column', gap:'12px', marginBottom:'30px'}}>
          {categoryStats.map(({ key, label, icon, total, mastered, due, new: n }) => (
            <div key={key} style={{
              background:'var(--bg-card)', borderRadius:'10px', padding:'16px 20px',
              border:'2px solid var(--border)', display:'flex', alignItems:'center', gap:'14px', flexWrap:'wrap'
            }}>
              <span style={{fontSize:'1.5rem'}}>{icon}</span>
              <div style={{flex:1, minWidth:'160px'}}>
                <div style={{fontWeight:'700', color:'var(--text-primary)', marginBottom:'6px'}}>{label}</div>
                <div className="progress-bar" style={{height:'8px', margin:0}}>
                  <div className="progress-fill" style={{width:`${total > 0 ? (mastered/total)*100 : 0}%`}} />
                </div>
              </div>
              <div style={{display:'flex', gap:'8px', flexWrap:'wrap'}}>
                <span style={{fontSize:'0.85rem', color:'var(--success-text)'}}>{mastered}/{total} mastered</span>
                {due > 0 && <span className="srs-stat-chip srs-chip-due" style={{fontSize:'0.8rem', padding:'3px 10px'}}>🔁 {due} due</span>}
                {n > 0 && <span className="srs-stat-chip srs-chip-new" style={{fontSize:'0.8rem', padding:'3px 10px'}}>✨ {n} new</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Mastered list */}
        {masteredTopics.length > 0 && (
          <div style={{marginTop:'10px'}}>
            <h3 style={{marginBottom:'14px', color:'var(--text-secondary)'}}>Mastered Topics ({masteredCount})</h3>
            <div style={{display:'flex', flexWrap:'wrap', gap:'10px'}}>
              {masteredTopics.map((name, idx) => (
                <span key={idx} className="tag" style={{fontSize:'0.95rem', padding:'7px 16px'}}>
                  ✓ {name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Reset buttons */}
        <div className="controls" style={{marginTop:'30px'}}>
          <button className="btn btn-danger" onClick={() => {
            if (window.confirm('Reset all mastered topics?')) {
              setMasteredTopics([]); localStorage.removeItem(PROGRESS_KEY)
            }
          }}>🔄 Reset All Mastered</button>
          <button className="btn btn-danger" onClick={resetSRS}>
            🗑️ Reset All SRS Data
          </button>
        </div>
      </div>
    )
  }

  // ─────────────────────────────────────────────────────────────────────────
  // MAIN RENDER
  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h1>📚 Indian Art & Culture — UPSC Prelims</h1>
          <p>Vedic Literature · Sanskrit Drama · Cultural Heritage · Spaced Repetition</p>
        </div>

        {/* Home: Topic Selection */}
        {!selectedTopic && renderTopicMenu()}

        {/* Topic selected: Mode selector */}
        {selectedTopic && !mode && (
          <div>
            <button className="btn btn-secondary" onClick={() => setSelectedTopic(null)} style={{marginBottom:'20px'}}>
              ← All Topics
            </button>
            <h2 style={{marginBottom:'20px', color:'var(--accent-light)', fontSize:'1.6rem'}}>
              {getTopicLabel(selectedTopic)}
            </h2>
            {renderModeSelector()}
          </div>
        )}

        {/* Mode active: Show content */}
        {selectedTopic && mode && (
          <div className="content-area">
            <button className="btn btn-secondary" onClick={resetMode} style={{marginBottom:'20px'}}>
              ← Back to {getTopicLabel(selectedTopic)}
            </button>

            {mode === 'flashcards' && renderFlashcards()}
            {mode === 'browse'     && renderBrowse()}
            {mode === 'quiz'       && renderQuiz()}
            {mode === 'progress'   && renderProgress()}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
