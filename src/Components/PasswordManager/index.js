import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

const colorsList = [
  '#f59e0b',
  '#10b981',
  '#f97316',
  '#14b8a6',
  '#b91c1c',
  '#0ea5e9',
  '#64748b',
]

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    websiteInput: '',
    userNameInput: '',
    passwordInput: '',
    searchInput: '',
    showPasswords: false,
  }

  renderNoPasswordView = () => (
    <div className="no-passwords-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-passwords-img"
      />
      <p className="no-passwords"> No Passwords </p>
    </div>
  )

  renderPasswordsLists = () => {
    const {passwordsList} = this.state
    return (
      <ul className="passwords-list">
        {passwordsList.map(eachPassword => (
          <PasswordItem
            key={eachPassword.id}
            passwordDetails={eachPassword}
            colorsList={colorsList}
          />
        ))}
      </ul>
    )
  }

  renderYourPasswordsView = () => {
    const {passwordsList} = this.state
    return (
      <div className="your-passwords-container">
        <div className="your-password-search-container">
          <div className="your-passwords-count-container">
            <h1 className="your-passwords"> Your Passwords </h1>
            <p className="count"> {passwordsList.length} </p>
          </div>
          <div className="search-and-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="search-img"
            />
            <input
              type="search"
              placeholder="Search"
              className="search-input"
            />
          </div>
        </div>
        <hr className="hr-line" />
        <div className="checkbox-label-container">
          <input type="checkbox" id="showPasswords" className="checkbox" />
          <label htmlFor="showPasswords" className="show-passwords">
            {' '}
            Show Passwords{' '}
          </label>
        </div>
        {passwordsList.length > 0
          ? this.renderPasswordsLists()
          : this.renderNoPasswordView()}
      </div>
    )
  }

  renderPasswordManagerView = () => (
    <div className="password-manager-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
        alt="password manager"
        className="password-manager-img-sm"
      />
      <form className="form-container">
        <h1 className="form-title"> Add New Password </h1>
        <div className="logo-input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
            alt="website"
            className="input-image"
          />
          <input
            type="text"
            placeholder="Enter Website"
            className="user-input"
          />
        </div>
        <div className="logo-input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
            alt="username"
            className="input-image"
          />
          <input
            type="text"
            placeholder="Enter Username"
            className="user-input"
          />
        </div>
        <div className="logo-input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
            alt="password"
            className="input-image"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="user-input"
          />
        </div>
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
        alt="password manager"
        className="password-manager-img-lg"
      />
    </div>
  )

  render() {
    return (
      <div className="app-container">
        <div className="responsive-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          {this.renderPasswordManagerView()}
          {this.renderYourPasswordsView()}
        </div>
      </div>
    )
  }
}

export default PasswordManager
