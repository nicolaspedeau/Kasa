import { Link, useParams } from 'react-router-dom'
import products from "../data/product.json"
console.log(typeof products)


function Logement() {
  let {id} = useParams();
  const goodProduct = products.filter(product => 
    id === product.id
  )
  console.log(goodProduct)

  return goodProduct.map((product) => (
    <section>
      <div>
        <img src={product.cover} alt="mainimage"></img>
      </div>
      <div>
        <div>
          <h1>{product.title}</h1>
          <p>{product.location}</p>
          <div>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <p>{product.host.name}</p>
            <img src={product.host.picture} alt="hostpicture"></img>
          </div>
        </div>
      </div>
      <div>
        <div>
        </div>
        <div>
        </div>
      </div>
    </section>
  ))
  
        
  }
  
  export default Logement

