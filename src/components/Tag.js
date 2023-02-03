import {  useParams } from 'react-router-dom'
import products from "../data/product.json"

const Tag = () => {
    let {id} = useParams();
    const goodProduct = products.filter(product => 
    id === product.id
    )
    const tags = goodProduct[0].tags

    return tags.map((product, index) =>(
        <div key={index} className='tag'>
            <p>{product}</p>
        </div>
    ))
            

}

export default Tag;