import { Link } from 'react-router-dom'
import logo from '../assets/LOGO.png'
import '../styles/header.scss'

function Header() {
  return (
    <div className='top'>
        <img className='top__logo' src={logo} alt="logo" />
        <div className='top__nav'>
            <nav>
              <Link to="/">Accueil</Link>
              <Link to="/about">A Propos</Link>
            </nav>
        </div>
    </div>
  )
}

export default Header

