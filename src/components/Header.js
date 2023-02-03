import { NavLink } from 'react-router-dom'
import logo from '../assets/LOGO.png'


function Header() {
  return (
    <div className='top'>
        <img className='top__logo' src={logo} alt="logo" />
        <div className='top__nav'>
            <nav>
              <NavLink  className={({isActive}) => isActive ? "top__nav-active top__nav-text" : "top__nav-text" } to="/">Accueil</NavLink>
              <NavLink className={({isActive}) => isActive ? "top__nav-active top__nav-text" : "top__nav-text" } to="/about">A Propos</NavLink>
            </nav>
        </div>
    </div>
  )
}

export default Header

