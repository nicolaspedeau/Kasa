import { useState } from "react";
import leftarrow from "../assets/leftarrow.svg";
import rightarrow from "../assets/rightarrow.svg";



const Slideshow = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideImg = `${slides[currentIndex]}`;
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length-1
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    const lengthSlide = slides.length;


    return (
        <div className="slides">
            <img className="slides_leftarrow" src={leftarrow} alt="movetotheleft" onClick={goToPrevious}></img>
            <div style={{ backgroundImage: `url(${slideImg})`}} className="slides_img">
            </div>
            <img className="slides_rightarrow" src={rightarrow}  alt="movetotheright" onClick={goToNext}></img>
            <div className="slides_position">
                <p>{currentIndex + 1}/{lengthSlide}</p>
            </div>
        </div>
    )
}

export default Slideshow;