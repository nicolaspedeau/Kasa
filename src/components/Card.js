import * as logement from "../item.json"
import "../styles/card.scss"
import { Link } from 'react-router-dom'

const Item = logement.default;



function Card() {
    return (
        <article className="container">
            {Item.map((logement) => (
            <Link key={logement.id} to="/logement/:id">
                <img src={logement.cover} alt={logement.title}/>
                <h2>{logement.title}</h2>
            </Link>
            ))}
        </article>
    )
}

export default Card;