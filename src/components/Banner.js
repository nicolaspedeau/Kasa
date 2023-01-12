import mer from '../assets/banner.png';
import montagne from '../assets/montagne.png';


function Banner(props) {
    
    if (props.banniere){
        return(
        <section className='banner'>
            <h1>Chez vous, partout et ailleurs</h1>
            <img src={mer} alt="bannière"></img>
        </section>
    )} else if(props.montagne) {
        return(
        <section className='banner'>
            <img src={montagne} alt="bannière"></img>
        </section>
    )}
}

export default Banner;