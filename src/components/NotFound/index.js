// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return isDarkTheme ? (
        <>
          <Navbar />
          <div className="not-found-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="notImage"
            />
            <h1 className="heading">Lost your way</h1>
            <p className="description">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <div className="dark-not-found-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="notImage"
            />
            <h1 className="dark-heading">Lost your way</h1>
            <p className="dark-description">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
