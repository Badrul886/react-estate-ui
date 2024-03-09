import { useState } from "react";
import "./slider.scss";

function Slider({ images }) {
    const [imagesIndex, setImagesIndex] = useState(null);
    const changeSlide = (direction) => {
        if(direction === "left") {
            // if(imagesIndex === images.length - 1) {
            //     setImagesIndex(0);
            // } else {
            //     setImagesIndex(imagesIndex + 1);
            // }
            if(imagesIndex === 0) {
                setImagesIndex(images.length - 1);
            } else {
                setImagesIndex(imagesIndex - 1);
            }
        } else {
            if(imagesIndex === images.length - 1) {
                setImagesIndex(0);
            } else {
                setImagesIndex(imagesIndex + 1);
            }
        }
    }

    return (
        <div className="slider">
            {imagesIndex !== null && (<div className="fullSlider">
                <div className="arrow">
                    <img src="/arrow.png" alt="arrow-icon" onClick={() => changeSlide("left")} />
                </div>
                <div className="imgContainer">
                    <img src={images[imagesIndex]} alt="" />
                </div>
                <div className="arrow">
                    <img src="/arrow.png" alt="arrow-icon" className="right" onClick={() => changeSlide("right")} />
                </div>
                <div className="close" onClick={() => setImagesIndex(null)}>X</div>
            </div>
            )}
            <div className="bigImage">
                <img src={images[0]} alt="first-image" onClick={() => setImagesIndex(0)} />
            </div>
            <div className="smallImages">
                {images.slice(1).map((image, index) => (
                    <img src={image} alt={index} key={index} onClick={() => setImagesIndex(index+1)} />
                ))}
            </div>
        </div>
    );
}

export default Slider;