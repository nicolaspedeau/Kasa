import mer from '../assets/banner.png';
import montagne from '../assets/montagne.jpg';


function Banner(props) {
    
    if (props.banniere){
        return(
        <section className='banner'>
            <div style={{ backgroundImage: `url(${mer})`}} className='banner_home'>
            </div>
            <h1>Chez vous, partout et ailleurs</h1>
        </section>
    )} else if(props.montagne) {
        return(
        <section className='banner'>
            <div style={{ backgroundImage: `url(${montagne})`}} className='banner_home'>
            </div>
        </section>
    )}
}

export default Banner;