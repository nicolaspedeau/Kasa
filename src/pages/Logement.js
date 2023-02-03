import {  useParams } from 'react-router-dom'
import products from "../data/product.json"
import Collapse from '../components/Collapse';
import Slideshow from '../components/Slideshow';
import Tag from '../components/Tag';
import { Navigate } from "react-router-dom";
import Rating from "../components/Rating";




function Logement() {
  let {id} = useParams();
  const goodProduct = products.find((produit) => 
    produit.id === id
  )

  return  (
    goodProduct ? (<section className='logement'>
    <div className='containerSlideshow'>
      <Slideshow slides={goodProduct.pictures}/>
    </div>
    <div className='logement-container'>
      <div className='logement-title'>
        <h1>{goodProduct.title}</h1>
        <p>{goodProduct.location}</p>
        <div className='logement-title_tags'>
          <Tag tags={goodProduct.tags}/>
        </div>
      </div>
      <div className='logement-user'>
        <div className='logement-user_host'>
          <p>{goodProduct.host.name}</p>
          <img src={goodProduct.host.picture} alt="hostpicture"></img>
        </div>
        <Rating stars={goodProduct.rating}/>
      </div>
    </div>
    <section className="accordion_logement">
      <div className='accordion_logement-container'>
          <Collapse  title="Description"  description={goodProduct.description}/>
      </div>
      <div className='accordion_logement-container'>
        <Collapse title="Equipement"  description={goodProduct.equipments}/>
      </div>
    </section>
  </section>) : (<Navigate to="/error" replace={true} />)
    
  )
  
        
  }
  
  export default Logement

