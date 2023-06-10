import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgain} = props
  let isWon = 'Lose'
  let isBestScore = ''
  let winOrLosePic =
    'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  if (score === 12) {
    isWon = 'Won'
    isBestScore = 'Best'
    winOrLosePic = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  }
  return (
    <div className="win-or-lose-card">
      <div className="win-or-lose-content">
        <h1 className="heading">You {isWon}</h1>
        <p className="best-score">{isBestScore} Score</p>
        <p className="final-score">{score}/12</p>
        <button type="button" className="play-again-btn" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <img src={winOrLosePic} className="won-or-lose-img" alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard