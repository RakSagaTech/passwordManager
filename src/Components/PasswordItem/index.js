import './index.css'

const PasswordItem = props => {
  const {passwordDetails, colorsList} = props
  const {id, websiteInput, usernameInput, passwordInput} = passwordDetails
  const firstCharacter = websiteInput[0].toUpperCase()

  const randomIndex = Math.floor(Math.random() * colorsList.length)
  const backgroundColor = colorsList[randomIndex]

  return (
    <li className="password-item">
      <div className="first-char-password-details-container">
        <div className="first-char-container" style={{backgroundColor}}>
          <h1 className="first-char"> {firstCharacter} </h1>
        </div>
        <div className="password-details-container">
          <p className="input-details">{websiteInput}</p>
          <p className="input-details">{usernameInput}</p>
          <p className="input-details">{passwordInput}</p>
        </div>
      </div>

      <button type="button" className="delete-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default PasswordItem
