import './index.css'

const PasswordItem = props => {
  const {passwordDetails, showPasswords, deletePassword} = props
  const {id, website, username, password, backgroundColor} = passwordDetails
  const firstCharacter = website[0].toUpperCase()

  const onClickDelete = () => {
    deletePassword(id)
  }

  const altText = showPasswords ? 'Password shown as text' : 'Stars'

  return (
    <li className="password-item">
      <div className="first-char-password-details-container">
        <div className="first-char-container" style={{backgroundColor}}>
          <h1 className="first-char"> {firstCharacter} </h1>
        </div>
        <div className="password-details-container">
          <p className="input-details">{website}</p>
          <p className="input-details">{username}</p>
          {showPasswords ? (
            <p className="input-details">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt={altText}
              className="stars"
            />
          )}
        </div>
      </div>

      <button type="button" className="delete-btn" onClick={onClickDelete}  data-testid="delete">
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
