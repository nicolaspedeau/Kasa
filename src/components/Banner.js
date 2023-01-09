import banner from '../assets/banner.png';
import "../styles/banner.scss";


function Banner() {
    return(
        <div className='banner'>
            <p>Chez vous, partout et ailleurs</p>
            <img src={banner} alt="bannière"></img>
        </div>
    )
}

export default Banner;