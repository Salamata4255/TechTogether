import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Button } from './Button'

export default function Navbar() {
  const [click, setClick] = useState(false)

  const handelClick = () => setClick(!click)
  const closeMenu = () => setClick(false)
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon" onClick={handelClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMenu}>
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/logout" className="nav-links" onClick={closeMenu}>
                Logout
              </Link>
            </li>
          </ul>
          <div className="endday">
            <Button buttonStyle="btn-outline" buttonSize="" text={'End day'} />
          </div>
        </div>
      </nav>
    </>
  )
}
