import './index.css'

const NavBar = props => {
  const {clickedEmojisList, totalScore, showWinOrLose} = props
  return (
    <nav className="navbar-container">
      <div className="logo-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="logo"
          alt="emoji logo"
        />
        <h1 className="logo-heading">Emoji Game</h1>
      </div>
      {!showWinOrLose && (
        <div className="score-con">
          <p className="score top-score">Score: {clickedEmojisList.length}</p>
          <p className="top-score">Top Score: {totalScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar