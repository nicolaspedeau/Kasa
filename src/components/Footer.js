import logo from '../assets/LOGOwhite.png'

function Footer() {
  return (
    <div className='footer'>
        <img className='footer_logo' src={logo} alt="logo" />
        <div className='footer_copyright'>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer;