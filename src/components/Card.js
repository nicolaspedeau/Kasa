import products from "../data/product.json"
import { Link } from 'react-router-dom'



function Card() {
    return products.map((product) => (
        <Link key={product.id} to={`/logement/${product.id}`}>
            <figure>
                <div className="card_contener">
                    <div className="card_contener_img">
                        <img src={product.cover}  alt=""/>
                    </div>
                    <h2>{product.title}</h2>
                </div>
            </figure>
        </Link>
    ))
}

export default Card;