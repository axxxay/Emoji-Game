import './index.css'

const EmojiCard = props => {
  const {eachEmoji, onClickEmojiShuffle} = props
  const {id, emojiName, emojiUrl} = eachEmoji
  const onClickEmoji = () => {
    onClickEmojiShuffle(id)
  }
  return (
    <li className="emoji-item">
      <button type="button" className="emoji-btn" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard