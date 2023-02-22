import mer from '../assets/banner.png';
import montagne from '../assets/montagne.jpg';


function Banner(props) {
    
    if (props.banniere){
        return(
        <article className='banner'>
            <div className='banner_home'>
                <img className='banner_home_mer' src={mer} alt='photomer'></img>
            </div>
            <h1>Chez vous, partout et ailleurs</h1>
        </article>
    )} else {
        return(
        <article className='banner'>
            <div  className='banner_home'>
                <img className='banner_home_montagne' src={montagne} alt='photomontagne'></img>
            </div>
        </article>
    )}
}

export default Banner;