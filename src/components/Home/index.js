// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return isDarkTheme ? (
        <>
          <Navbar />
          <div className="home-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              alt="home"
            />
            <h1 className="heading">Home</h1>
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <div className="dark-home-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
              alt="home"
            />
            <h1 className="dark-heading">Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
