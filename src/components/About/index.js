// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return isDarkTheme ? (
        <>
          <Navbar />
          <div className="home-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
              alt="about"
            />
            <h1 className="heading">About</h1>
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <div className="dark-home-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
              alt="about"
            />
            <h1 className="dark-heading">About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
