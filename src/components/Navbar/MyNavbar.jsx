import { useState } from 'react'
import { Link } from 'react-router-dom'

const MyNavbar = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleMenu = () => {
    setIsActive(!isActive)
  }

  const handleLinkClick = () => {
    setIsActive(false)
  }

  return (
    <div>
      <input
        type="checkbox"
        id="active"
        checked={isActive}
        onChange={toggleMenu}
        className="hidden"
      />
      <label htmlFor="active" className="menu-btn">
        <span></span>
      </label>
      <label htmlFor="active" className="close"></label>
      <div className={`wrapper ${isActive ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="/Projects" onClick={handleLinkClick}>
              Progetti
            </Link>
          </li>
          <li>
            <Link to="/Skills" onClick={handleLinkClick}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/Contacts" onClick={handleLinkClick}>
              Contatti
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MyNavbar
