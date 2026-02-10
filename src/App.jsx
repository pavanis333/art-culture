import { useState, useEffect } from 'react'
import data from './data'

const topicsData = data.artCultureData
const quizQuestions = data.quizQuestions

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null) // null = home menu, 'vedic' or 'drama' = topic selected
  const [mode, setMode] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState([])
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [masteredTopics, setMasteredTopics] = useState([])
  const [filter, setFilter] = useState('all')
  const [flipped, setFlipped] = useState(false)
  const [showNavigator, setShowNavigator] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('artCultureDataProgress')
    if (saved) {
      const data = JSON.parse(saved)
      setMasteredTopics(data.masteredTopics || [])
    }

    const savedQuiz = localStorage.getItem('artCultureDataQuizState')
    if (savedQuiz && mode === 'quiz') {
      const quizData = JSON.parse(savedQuiz)
      setCurrentIndex(quizData.currentIndex || 0)
      setScore(quizData.score || 0)
      setQuizAnswers(quizData.quizAnswers || [])
    }
  }, [mode])

  const saveProgress = (mastered) => {
    localStorage.setItem('artCultureDataProgress', JSON.stringify({
      masteredTopics: mastered
    }))
  }

  const saveQuizState = (index, currentScore, answers) => {
    localStorage.setItem('artCultureDataQuizState', JSON.stringify({
      currentIndex: index,
      score: currentScore,
      quizAnswers: answers
    }))
  }

  const resetQuiz = () => {
    localStorage.removeItem('artCultureDataQuizState')
    setCurrentIndex(0)
    setScore(0)
    setQuizAnswers([])
    setSelectedAnswer(null)
    setShowResult(false)
  }

  const resetMode = () => {
    setMode(null)
    setCurrentIndex(0)
    setFlipped(false)
    setScore(0)
    setQuizAnswers([])
    setSelectedAnswer(null)
    setShowResult(false)
  }

  const getFilteredTopics = () => {
    // First filter by selected topic
    let filtered = topicsData
    if (selectedTopic === 'vedic') {
      filtered = topicsData.filter(v => v.category === 'Vedic Literature')
    } else if (selectedTopic === 'drama') {
      filtered = topicsData.filter(v => v.category === 'Sanskrit Drama')
    } else if (selectedTopic === 'buddhist') {
      filtered = topicsData.filter(v => v.category === 'Buddhist Texts')
    } else if (selectedTopic === 'religious') {
      filtered = topicsData.filter(v => v.category === 'Religious Literature')
    } else if (selectedTopic === 'dravidian') {
      filtered = topicsData.filter(v => v.category === 'Dravidian Literature')
    } else if (selectedTopic === 'medieval') {
      filtered = topicsData.filter(v => v.category === 'Medieval Literature')
    } else if (selectedTopic === 'modern') {
      filtered = topicsData.filter(v => v.category === 'Modern Literature')
    } else if (selectedTopic === 'unesco') {
      filtered = topicsData.filter(v => v.category === 'Dravidian Literature')
    }
    
    // Then apply additional filters
    if (filter === 'high') return filtered.filter(v => v.importance === 'HIGH')
    return filtered
  }

  const handleQuizAnswer = (answerIndex) => {
    if (quizAnswers[currentIndex]) {
      const newAnswers = [...quizAnswers]
      const correct = quizQuestions[currentIndex].correct === answerIndex
      
      const oldCorrect = newAnswers[currentIndex].correct
      let newScore = score
      if (oldCorrect && !correct) newScore--
      if (!oldCorrect && correct) newScore++
      
      newAnswers[currentIndex] = {
        question: currentIndex,
        selected: answerIndex,
        correct: correct
      }
      
      setQuizAnswers(newAnswers)
      setScore(newScore)
      setSelectedAnswer(answerIndex)
      saveQuizState(currentIndex, newScore, newAnswers)
      return
    }
    
    setSelectedAnswer(answerIndex)
    const correct = quizQuestions[currentIndex].correct === answerIndex
    
    const newScore = correct ? score + 1 : score
    const newAnswers = [...quizAnswers, {
      question: currentIndex,
      selected: answerIndex,
      correct: correct
    }]
    
    if (correct) {
      setScore(newScore)
    }
    
    setQuizAnswers(newAnswers)
    saveQuizState(currentIndex, newScore, newAnswers)
  }

  const nextQuizQuestion = () => {
    if (currentIndex < quizQuestions.length - 1) {
      const nextIndex = currentIndex + 1
      setCurrentIndex(nextIndex)
      if (quizAnswers[nextIndex]) {
        setSelectedAnswer(quizAnswers[nextIndex].selected)
      } else {
        setSelectedAnswer(null)
      }
      saveQuizState(nextIndex, score, quizAnswers)
    } else if (quizAnswers.length === quizQuestions.length) {
      setShowResult(true)
      localStorage.removeItem('artCultureDataQuizState')
    }
  }

  const prevQuizQuestion = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1
      setCurrentIndex(prevIndex)
      if (quizAnswers[prevIndex]) {
        setSelectedAnswer(quizAnswers[prevIndex].selected)
      } else {
        setSelectedAnswer(null)
      }
      saveQuizState(prevIndex, score, quizAnswers)
    }
  }

  const getScoreEmoji = () => {
    const percentage = (score / quizQuestions.length) * 100
    if (percentage >= 90) return '🏆'
    if (percentage >= 75) return '🌟'
    if (percentage >= 60) return '👍'
    if (percentage >= 50) return '😊'
    return '📚'
  }

  const renderTopicMenu = () => {
    const vedicCount = topicsData.filter(t => t.category === 'Vedic Literature').length
    const dramaCount = topicsData.filter(t => t.category === 'Sanskrit Drama').length
    const buddhistCount = topicsData.filter(t => t.category === 'Buddhist Texts').length
    const religiousCount = topicsData.filter(t => t.category === 'Religious Literature').length
    const dravidianCount = topicsData.filter(t => t.category === 'Dravidian Literature').length
    const medievalCount = topicsData.filter(t => t.category === 'Medieval Literature').length
    const modernCount = topicsData.filter(t => t.category === 'Modern Literature').length
    const unescoCount = topicsData.filter(t => t.category === 'UNESCO Heritage').length
    
    return (
      <div className="mode-selector">
        <div className="mode-card" onClick={() => setSelectedTopic('vedic')}>
          <div className="mode-icon">📖</div>
          <h3>Vedic Literature</h3>
          <p>{vedicCount} Vedas with associated Brahmanas, Aranyakas & Upanishads</p>
        </div>
        
        <div className="mode-card" onClick={() => setSelectedTopic('drama')}>
          <div className="mode-icon">🎭</div>
          <h3>Sanskrit Drama</h3>
          <p>{dramaCount} classical plays from Bhasa to Kalhana (2nd-12th century)</p>
        </div>
        
        <div className="mode-card" onClick={() => setSelectedTopic('buddhist')}>
          <div className="mode-icon">🧘</div>
          <h3>Buddhist Texts</h3>
          <p>{buddhistCount} texts including Dipavamsa, Mahavamsa, Milinda Panho</p>
        </div>
        
        <div className="mode-card" onClick={() => setSelectedTopic('religious')}>
          <div className="mode-icon">🕉️</div>
          <h3>Religious Literature</h3>
          <p>{religiousCount} texts: Jain Agamas, Zoroastrian Avesta, Sikh Granths</p>
        </div>
        
        <div className="mode-card" onClick={() => setSelectedTopic('dravidian')}>
          <div className="mode-icon">📜</div>
          <h3>Dravidian Literature</h3>
          <p>{dravidianCount} texts: Tamil Sangam, Telugu, Kannada, Malayalam</p>
        </div>
        
        <div className="mode-card" onClick={() => setSelectedTopic('medieval')}>
          <div className="mode-icon">🏰</div>
          <h3>Medieval Literature</h3>
          <p>{medievalCount} texts: Persian, Urdu, Hindi from Mughal era</p>
        </div>
        
        <div className="mode-card" onClick={() => setSelectedTopic('modern')}>
          <div className="mode-icon">📚</div>
          <h3>Modern Literature</h3>
          <p>{modernCount} texts: Hindi, Bengali, Rajasthani, Kashmiri</p>
        </div>
        
        <div className="mode-card" onClick={() => setSelectedTopic('unesco')}>
          <div className="mode-icon">🏛️</div>
          <h3>UNESCO Heritage</h3>
          <p>{unescoCount} Cultural Sites (2025-1983): Taj Mahal, Ajanta, Ellora</p>
        </div>
      </div>
    )
  }

  const renderModeSelector = () => (
    <div className="mode-selector">
      <div className="mode-card" onClick={() => setMode('flashcards')}>
        <div className="mode-icon">🗂️</div>
        <h3>Flashcards</h3>
        <p>Learn with interactive flashcards</p>
      </div>
      
      <div className="mode-card" onClick={() => setMode('browse')}>
        <div className="mode-icon">📚</div>
        <h3>Browse Topics</h3>
        <p>Explore all topics with detailed information</p>
      </div>
      
      <div className="mode-card" onClick={() => setMode('quiz')}>
        <div className="mode-icon">❓</div>
        <h3>Quiz Mode</h3>
        <p>Test knowledge with UPSC-style questions</p>
      </div>
      
      <div className="mode-card" onClick={() => setMode('progress')}>
        <div className="mode-icon">📊</div>
        <h3>Progress</h3>
        <p>Track your learning progress</p>
      </div>
    </div>
  )

  const renderFlashcards = () => {
    const artCultureData = getFilteredTopics()
    if (artCultureData.length === 0) return <p>No artCultureData match this filter.</p>

    const topic = artCultureData[currentIndex]
    const isMastered = masteredTopics.includes(topic.name)

    const nextCard = () => {
      if (currentIndex < artCultureData.length - 1) {
        setCurrentIndex(currentIndex + 1)
        setFlipped(false)
      }
    }

    const prevCard = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1)
        setFlipped(false)
      }
    }

    const markAsMastered = () => {
      if (masteredTopics.includes(topic.name)) {
        const updated = masteredTopics.filter(name => name !== topic.name)
        setMasteredTopics(updated)
        saveProgress(updated)
      } else {
        const updated = [...masteredTopics, topic.name]
        setMasteredTopics(updated)
        saveProgress(updated)
        nextCard()
      }
    }

    return (
      <div>
        <div className="filter-section">
          <h3>Filter by Category</h3>
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => { setFilter('all'); setCurrentIndex(0); }}
            >
              All ({topicsData.length})
            </button>
            <button 
              className={`filter-btn ${filter === 'high' ? 'active' : ''}`}
              onClick={() => { setFilter('high'); setCurrentIndex(0); }}
            >
              High Priority
            </button>
          </div>
        </div>

        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{width: `${((currentIndex + 1) / artCultureData.length) * 100}%`}}
          />
        </div>

        <div className="flashcard">
          <div 
            className={`flashcard-inner ${flipped ? 'flipped' : ''}`}
            onClick={() => setFlipped(!flipped)}
          >
            <div className="flashcard-front">
              <h2 style={{fontSize: '2.5rem', marginBottom: '20px', color: '#ff6600'}}>
                {topic.name}
              </h2>
              <div style={{fontSize: '1.2rem', color: '#ff9933', marginBottom: '15px'}}>
                {topic.category}
              </div>
              <p className="flashcard-hint">👆 Tap to flip</p>
            </div>
            <div className="flashcard-back">
              <div style={{textAlign: 'left', width: '100%', maxHeight: '400px', overflowY: 'auto', paddingRight: '10px'}}>
                <div className="topic-info"><strong>Category:</strong> {topic.category}</div>
                {topic.subcategory && <div className="topic-info"><strong>Type:</strong> {topic.subcategory}</div>}
                
                {/* Associated Brahmanas */}
                {topic.associatedTexts && topic.associatedTexts.brahmanas && (
                  <div style={{marginTop: '10px', borderTop: '1px solid #ccc', paddingTop: '8px'}}>
                    <strong style={{color: '#ff6600'}}>Associated Brahmanas:</strong>
                    <ul style={{margin: '5px 0', paddingLeft: '20px', fontSize: '0.9rem'}}>
                      {topic.associatedTexts.brahmanas.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                )}
                
                {/* Associated Aranyakas */}
                {topic.associatedTexts && topic.associatedTexts.aranyakas && (
                  <div style={{marginTop: '10px', borderTop: '1px solid #ccc', paddingTop: '8px'}}>
                    <strong style={{color: '#ff6600'}}>Associated Aranyakas:</strong>
                    <ul style={{margin: '5px 0', paddingLeft: '20px', fontSize: '0.9rem'}}>
                      {topic.associatedTexts.aranyakas.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                )}
                
                {/* Associated Upanishads */}
                {topic.associatedTexts && topic.associatedTexts.upanishads && (
                  <div style={{marginTop: '10px', borderTop: '1px solid #ccc', paddingTop: '8px'}}>
                    <strong style={{color: '#ff6600'}}>Associated Upanishads:</strong>
                    <ul style={{margin: '5px 0', paddingLeft: '20px', fontSize: '0.9rem'}}>
                      {topic.associatedTexts.upanishads.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                )}
                
                {/* Sanskrit Drama specific fields */}
                {topic.author && (
                  <div style={{marginTop: '10px', borderTop: '1px solid #ccc', paddingTop: '8px'}}>
                    <div className="topic-info"><strong>Author:</strong> {topic.author}</div>
                  </div>
                )}
                {topic.period && (
                  <div style={{marginTop: '10px', borderTop: '1px solid #ccc', paddingTop: '8px'}}>
                    <div className="topic-info"><strong>Period:</strong> {topic.period}</div>
                  </div>
                )}
                {topic.description && (
                  <div style={{marginTop: '10px', borderTop: '1px solid #ccc', paddingTop: '8px'}}>
                    <strong style={{color: '#ff6600'}}>Description:</strong>
                    <div className="topic-info" style={{marginTop: '5px'}}>{topic.description}</div>
                  </div>
                )}
                {topic.upscRelevance && (
                  <div style={{marginTop: '10px', borderTop: '1px solid #ccc', paddingTop: '8px'}}>
                    <div className="topic-info" style={{fontWeight: 'bold', color: '#ff6600'}}>
                      {topic.upscRelevance}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="controls">
          <button 
            className="btn btn-secondary" 
            onClick={prevCard}
            disabled={currentIndex === 0}
          >
            ⬅️ Previous
          </button>
          
          <button 
            className="btn btn-primary" 
            onClick={markAsMastered}
          >
            {isMastered ? '✓ Mastered (click to unmark)' : '✓ Mark as Mastered'}
          </button>
          
          <button 
            className="btn btn-secondary" 
            onClick={nextCard}
            disabled={currentIndex === artCultureData.length - 1}
          >
            Next ➡️
          </button>
        </div>

        <div style={{textAlign: 'center', marginTop: '20px', color: '#1a3a0f', fontSize: '1.1rem'}}>
          Card {currentIndex + 1} of {artCultureData.length}
          {isMastered && <span style={{marginLeft: '15px', color: '#558b2f'}}>✓ Mastered</span>}
        </div>
      </div>
    )
  }

  const renderBrowse = () => {
    const artCultureData = getFilteredTopics()

    return (
      <div>
        <div className="filter-section">
          <h3>Filter by Category</h3>
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All ({topicsData.length})
            </button>
            <button 
              className={`filter-btn ${filter === 'high' ? 'active' : ''}`}
              onClick={() => setFilter('high')}
            >
              High Priority
            </button>
          </div>
        </div>

        <h2 style={{marginBottom: '20px', color: '#1a3a0f'}}>
          {artCultureData.length} Topic(s) Found
        </h2>

        <div className="artCultureData-grid">
          {artCultureData.map(topic => (
            <div key={topic.id} className="topic-card">
              <h3>{topic.name}</h3>
              <div className="tags">
                <span className="tag">{topic.category}</span>
                <span className={`tag ${topic.importance === 'HIGH' ? 'high' : ''}`}>
                  {topic.importance}
                </span>
              </div>
              
              {/* Associated Texts Summary (for Vedic Literature) */}
              {topic.associatedTexts && (
                <div style={{marginTop: '8px', fontSize: '0.85rem'}}>
                  {topic.associatedTexts.brahmanas && (
                    <div className="topic-info"><strong>Brahmanas:</strong> {topic.associatedTexts.brahmanas.length}</div>
                  )}
                  {topic.associatedTexts.aranyakas && (
                    <div className="topic-info"><strong>Aranyakas:</strong> {topic.associatedTexts.aranyakas.length}</div>
                  )}
                  {topic.associatedTexts.upanishads && (
                    <div className="topic-info"><strong>Upanishads:</strong> {topic.associatedTexts.upanishads.length}</div>
                  )}
                </div>
              )}
              
              {/* Author and Period (for Sanskrit Drama) */}
              {topic.author && (
                <div style={{marginTop: '8px', fontSize: '0.85rem'}}>
                  <div className="topic-info"><strong>Author:</strong> {topic.author}</div>
                  {topic.period && <div className="topic-info"><strong>Period:</strong> {topic.period}</div>}
                </div>
              )}
              
              {/* Description Preview */}
              {topic.description && (
                <div className="topic-info" style={{marginTop: '8px', fontSize: '0.8rem', fontStyle: 'italic'}}>
                  {topic.description.substring(0, 100)}...
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderQuiz = () => {
    // Filter quiz questions by selected topic
    const filteredQuiz = selectedTopic 
      ? quizQuestions.filter(q => {
          if (selectedTopic === 'vedic') return q.category === 'Vedic Literature'
          if (selectedTopic === 'drama') return q.category === 'Sanskrit Drama'
          if (selectedTopic === 'buddhist') return q.category === 'Buddhist Texts'
          if (selectedTopic === 'religious') return q.category === 'Religious Literature'
          if (selectedTopic === 'dravidian') return q.category === 'Dravidian Literature'
          if (selectedTopic === 'medieval') return q.category === 'Medieval Literature'
          if (selectedTopic === 'modern') return q.category === 'Modern Literature'
          if (selectedTopic === 'unesco') return q.category === 'UNESCO Heritage'
          return true
        })
      : quizQuestions
    
    if (showResult) {
      const percentage = ((score / filteredQuiz.length) * 100).toFixed(0)
      
      return (
        <div className="result-screen">
          <div className="result-emoji">{getScoreEmoji()}</div>
          <h2>Quiz Complete!</h2>
          <div className="result-score">
            {score} / {filteredQuiz.length}
          </div>
          <p style={{fontSize: '1.5rem', color: '#1a3a0f', marginBottom: '30px'}}>
            You scored {percentage}%
          </p>
          
          <div style={{textAlign: 'left', marginBottom: '30px'}}>
            <h3 style={{marginBottom: '15px'}}>Review:</h3>
            {quizAnswers.map((answer, idx) => (
              <div key={idx} style={{
                padding: '15px',
                marginBottom: '10px',
                background: answer.correct ? '#d1fae5' : '#fee2e2',
                borderRadius: '8px',
                border: '2px solid ' + (answer.correct ? '#10b981' : '#ef4444')
              }}>
                <p style={{fontWeight: 'bold', marginBottom: '5px'}}>
                  Q{idx + 1}: {filteredQuiz[idx].question}
                </p>
                <p style={{color: '#666'}}>
                  {answer.correct ? '✓ Correct!' : `✗ Wrong - ${filteredQuiz[idx].explanation}`}
                </p>
              </div>
            ))}
          </div>

          <div className="controls">
            <button className="btn btn-primary" onClick={resetQuiz}>
              🔄 Retry Quiz
            </button>
            <button className="btn btn-secondary" onClick={resetMode}>
              🏠 Back to Home
            </button>
          </div>
        </div>
      )
    }

    const question = filteredQuiz[currentIndex]

    const jumpToQuestion = (index) => {
      setCurrentIndex(index)
      if (quizAnswers[index]) {
        setSelectedAnswer(quizAnswers[index].selected)
      } else {
        setSelectedAnswer(null)
      }
      saveQuizState(index, score, quizAnswers)
      setShowNavigator(false)
    }

    return (
      <div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{width: `${(quizAnswers.length / filteredQuiz.length) * 100}%`}}
          />
        </div>

        <div style={{textAlign: 'center', margin: '15px 0'}}>
          <button 
            className="btn btn-secondary"
            onClick={() => setShowNavigator(true)}
          >
            📋 Question Navigator ({quizAnswers.length}/{filteredQuiz.length})
          </button>
        </div>

        {showNavigator && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: '20px'
          }} onClick={() => setShowNavigator(false)}>
            <div style={{
              background: '#f1f8e9',
              borderRadius: '16px',
              padding: '30px',
              maxWidth: '700px',
              maxHeight: '80vh',
              overflow: 'auto',
              width: '100%',
              boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
              border: '3px solid #7cb342'
            }} onClick={(e) => e.stopPropagation()}>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px'
              }}>
                <h3 style={{margin: 0, color: '#1a3a0f'}}>Question Navigator</h3>
                <button 
                  onClick={() => setShowNavigator(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    padding: '5px 10px',
                    color: '#1a3a0f'
                  }}
                >
                  ✕
                </button>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(50px, 1fr))',
                gap: '10px'
              }}>
                {quizQuestions.map((_, idx) => {
                  const isAnswered = quizAnswers[idx] !== undefined
                  const isCurrent = idx === currentIndex
                  const isCorrect = isAnswered && quizAnswers[idx].correct
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => jumpToQuestion(idx)}
                      style={{
                        padding: '12px',
                        border: isCurrent ? '3px solid #7cb342' : '2px solid #558b2f',
                        borderRadius: '8px',
                        background: isCurrent 
                          ? '#c5e1a5'
                          : isAnswered 
                            ? (isCorrect ? '#d1fae5' : '#fee2e2')
                            : 'white',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontWeight: isCurrent ? 'bold' : 'normal',
                        color: '#1a3a0f',
                        transition: 'all 0.2s'
                      }}
                    >
                      {idx + 1}
                    </button>
                  )
                })}
              </div>

              <div style={{marginTop: '20px', textAlign: 'center'}}>
                <button 
                  className="btn btn-primary"
                  onClick={() => setShowNavigator(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="quiz-question">
          <h3>Question {currentIndex + 1} of {filteredQuiz.length}</h3>
          <p style={{fontSize: '1.3rem', marginBottom: '30px', color: '#1a3a0f'}}>
            {question.question}
          </p>

          <div className="quiz-options">
            {question.options.map((option, idx) => {
              let className = 'quiz-option'
              if (selectedAnswer !== null) {
                if (idx === question.correct) {
                  className += ' correct'
                } else if (idx === selectedAnswer) {
                  className += ' incorrect'
                }
              }

              return (
                <div
                  key={idx}
                  className={className}
                  onClick={() => handleQuizAnswer(idx)}
                >
                  <strong>{String.fromCharCode(65 + idx)}.</strong> {option}
                </div>
              )
            })}
          </div>

          {selectedAnswer !== null && (
            <div style={{
              marginTop: '20px',
              padding: '20px',
              background: selectedAnswer === question.correct ? '#d1fae5' : '#fee2e2',
              borderRadius: '12px',
              border: '2px solid ' + (selectedAnswer === question.correct ? '#10b981' : '#ef4444')
            }}>
              <p style={{fontWeight: 'bold', marginBottom: '10px', color: '#1a3a0f'}}>
                {selectedAnswer === question.correct ? '✓ Correct!' : '✗ Incorrect'}
              </p>
              <p style={{color: '#33691e'}}>{question.explanation}</p>
            </div>
          )}
        </div>

        <div style={{textAlign: 'center', marginTop: '20px', color: '#1a3a0f'}}>
          Score: {score} / {quizAnswers.length}
        </div>

        <div className="controls" style={{marginTop: '20px'}}>
          <button 
            className="btn btn-secondary" 
            onClick={prevQuizQuestion}
            disabled={currentIndex === 0}
          >
            ⬅️ Previous
          </button>
          
          <button 
            className="btn btn-primary" 
            onClick={nextQuizQuestion}
            disabled={currentIndex === quizQuestions.length - 1 && quizAnswers.length < quizQuestions.length}
          >
            {currentIndex === quizQuestions.length - 1 && quizAnswers.length === quizQuestions.length ? '✓ Finish Quiz' : 'Next ➡️'}
          </button>
        </div>

        <div className="controls" style={{marginTop: '10px'}}>
          <button className="btn btn-secondary" onClick={resetQuiz}>
            🔄 Reset Quiz
          </button>
          <button className="btn btn-secondary" onClick={resetMode}>
            🏠 Back to Home
          </button>
        </div>
      </div>
    )
  }

  const renderProgress = () => {
    const totalTopics = topicsData.length
    const masteredCount = masteredTopics.length
    const progress = ((masteredCount / totalTopics) * 100).toFixed(0)
    const highPriority = topicsData.filter(c => c.importance === 'HIGH').length

    return (
      <div>
        <h2 style={{marginBottom: '30px', color: '#1a3a0f'}}>Your Progress</h2>
        
        <div className="stats">
          <div className="stat-card">
            <h4>Total Topics</h4>
            <div className="value">{totalTopics}</div>
          </div>
          <div className="stat-card">
            <h4>Mastered</h4>
            <div className="value" style={{color: '#558b2f'}}>{masteredCount}</div>
          </div>
          <div className="stat-card">
            <h4>Remaining</h4>
            <div className="value" style={{color: '#f57c00'}}>{totalTopics - masteredCount}</div>
          </div>
          <div className="stat-card">
            <h4>High Priority</h4>
            <div className="value">{highPriority}</div>
          </div>
        </div>

        <div style={{marginBottom: '30px', marginTop: '30px'}}>
          <h3 style={{marginBottom: '15px', color: '#1a3a0f'}}>Overall Progress</h3>
          <div className="progress-bar" style={{height: '30px'}}>
            <div 
              className="progress-fill" 
              style={{
                width: `${progress}%`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold'
              }}
            >
              {progress}%
            </div>
          </div>
        </div>

        {masteredTopics.length > 0 && (
          <div style={{marginTop: '30px'}}>
            <h3 style={{marginBottom: '15px', color: '#1a3a0f'}}>Mastered Topics ({masteredCount})</h3>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
              {masteredTopics.map((name, idx) => (
                <span key={idx} className="tag" style={{fontSize: '0.95rem', padding: '8px 16px'}}>
                  ✓ {name}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="controls" style={{marginTop: '30px'}}>
          <button 
            className="btn btn-danger" 
            onClick={() => {
              if (confirm('Are you sure you want to reset all progress?')) {
                setMasteredTopics([])
                localStorage.removeItem('artCultureDataProgress')
              }
            }}
          >
            🔄 Reset Progress
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h1>📚 Indian Art & Culture - UPSC Prep</h1>
          <p>Master Vedic Literature, Sanskrit Drama & Cultural Heritage</p>
        </div>

        {/* Home Menu - Topic Selection */}
        {!selectedTopic && renderTopicMenu()}

        {/* Topic Selected - Show Mode Selector */}
        {selectedTopic && !mode && (
          <div>
            <button 
              className="btn btn-secondary" 
              onClick={() => setSelectedTopic(null)}
              style={{marginBottom: '20px'}}
            >
              ← Back to Home
            </button>
            {renderModeSelector()}
          </div>
        )}

        {/* Mode Selected - Show Content */}
        {selectedTopic && mode && (
          <div className="content-area">
            <button 
              className="btn btn-secondary" 
              onClick={resetMode}
              style={{marginBottom: '20px'}}
            >
              ← Back to {
                selectedTopic === 'vedic' ? 'Vedic Literature' : 
                selectedTopic === 'buddhist' ? 'Buddhist Texts' :
                selectedTopic === 'religious' ? 'Religious Literature' :
                selectedTopic === 'dravidian' ? 'Dravidian Literature' :
                selectedTopic === 'medieval' ? 'Medieval Literature' :
                selectedTopic === 'modern' ? 'Modern Literature' :
                selectedTopic === 'unesco' ? 'UNESCO Heritage' :
                'Sanskrit Drama'
              }
            </button>

            {mode === 'flashcards' && renderFlashcards()}
            {mode === 'browse' && renderBrowse()}
            {mode === 'quiz' && renderQuiz()}
            {mode === 'progress' && renderProgress()}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
