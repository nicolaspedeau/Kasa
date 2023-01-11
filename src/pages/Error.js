import { Link } from 'react-router-dom'
import "../styles/error.scss"

function Error() {
    return (
      <div className='notfound'>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'acceuil</Link>
      </div>
    )
  }
  
  export default Error