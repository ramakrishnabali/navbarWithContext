// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const changeTheme = () => {
        toggleTheme()
      }

      return isDarkTheme ? (
        <div className="navbar-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
            alt="theme"
            className="theme-logo"
          />
          <div className="content-container">
            <Link to="/" className="nav-link">
              <h1 className="content">Home</h1>
            </Link>
            <Link to="/about" className="nav-link">
              <h1 className="content">About</h1>
            </Link>
          </div>
          <button
            data-testid="theme"
            onClick={changeTheme}
            type="button"
            className="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              alt="website logo"
              className="website-logo"
            />
          </button>
        </div>
      ) : (
        <div className="dark-navbar-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
            alt="theme"
            className="theme-logo"
          />
          <ul className="content-container">
            <Link to="/" className="nav-link">
              <li>
                <h1 className="dark-content">Home</h1>
              </li>
            </Link>
            <Link to="/about" className="nav-link">
              <li>
                <h1 className="dark-content">About</h1>
              </li>
            </Link>
          </ul>
          <button
            data-testid="theme"
            onClick={changeTheme}
            type="button"
            className="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
              alt="website logo"
              className="website-logo"
            />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
