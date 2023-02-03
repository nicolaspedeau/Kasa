import star_empty from '../assets/star_empty.png'
import star_colored from '../assets/star_colored.png'


function Rating({stars}) {
   const greyStar = [5 - stars]
   
   return(
    <div className='rating-contener'>
        {Array.from({ length: stars }, (_, i) => (
            <img className='rating-contener_stars' key={i} src={star_colored} alt="étoiles de notation pleine" />
        ))}
        {Array.from({ length: greyStar }, (_, i) => (
            <img className='rating-contener_stars' key={i} src={star_empty} alt="étoiles de notation vide" />
        ))}
    </div>
   )
}
export default Rating;