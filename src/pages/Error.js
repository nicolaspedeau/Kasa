import { Link } from "react-router-dom"

function Error() {
    return (
      <div className="notfound">
        <h1>404</h1>
        <div className="notfound_bot">
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <Link className="notfound_link" to="/">Retourner sur la page d'acceuil</Link>
        </div>
      </div>
    )
  }
  
  export default Error