import products from "../data/product.json"
import { Link } from 'react-router-dom'



function Card() {
    return products.map((product) => (
        <Link style={{ backgroundImage: `url(${product.cover})`}} className="card_product" key={product.id} to={`/logement/${product.id}`}>
                <div className="card_product_text">
                    <h2>{product.title}</h2>
                </div>
            </Link>
    ))
}

export default Card;