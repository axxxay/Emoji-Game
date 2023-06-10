/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    totalScore: 0,
    clickedEmojisList: [],
    showEmoji: true,
    showWinOrLose: false,
    shuffledEmojis: [],
  }

  componentDidMount() {
    const {emojisList} = this.props
    this.setState({shuffledEmojis: emojisList})
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  finishGameAndSetTopScore = result => {
    const {totalScore} = this.state
    this.setState({showEmoji: false, showWinOrLose: true, score: result})
    this.setState(prevState => {
      if (result > totalScore) {
        return {totalScore: result}
      }
      return {totalScore: prevState.totalScore}
    })
  }

  playAgain = () => {
    this.setState({
      showEmoji: true,
      showWinOrLose: false,
      clickedEmojisList: [],
    })
  }

  onClickEmojiShuffle = id => {
    this.setState({shuffledEmojis: this.shuffledEmojisList()})
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojiLength = clickedEmojisList.length
    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojiLength)
    } else {
      if (emojisList.length - 1 === clickedEmojiLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  render() {
    const {
      showEmoji,
      totalScore,
      showWinOrLose,
      shuffledEmojis,
      clickedEmojisList,
      score,
    } = this.state
    return (
      <>
        <div className="container">
          <NavBar
            clickedEmojisList={clickedEmojisList}
            totalScore={totalScore}
            showWinOrLose={showWinOrLose}
          />
          {showEmoji && (
            <ul className="emoji-container">
              {shuffledEmojis.map(eachEmoji => (
                <EmojiCard
                  key={eachEmoji.id}
                  eachEmoji={eachEmoji}
                  onClickEmojiShuffle={this.onClickEmojiShuffle}
                />
              ))}
            </ul>
          )}
          {showWinOrLose && (
            <WinOrLoseCard score={score} playAgain={this.playAgain} />
          )}
        </div>
      </>
    )
  }
}

export default EmojiGame