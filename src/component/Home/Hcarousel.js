import React,{useState} from 'react';
import './Hcarousel.css';

import{
    img7, img8, img9, img10, img11, img12, img13, img14
} from '../assets';

const images = [
    { src: img7, caption: "Surveillance Watch: An interactive data visualisation highlighting global surveillance connections" },
    { src: img8, caption: "Unearthed: An all new website to showcase the teams expertise across innovation in the resources sector." },
    { src: img9, caption: "umaaniversary: Celebrating 14 years of making extraordinary digital products with our incredible team." },
    { src: img10, caption: "My Mind Check: An evidence-based digital mental health and wellbeing check-in for Australian schools."},
    { src: img11, caption: "Fair Go Finance: Flexible personal finance has an all new website." },
    { src: img12, caption: "Australian Web Awards: 15 nominations and 2 wins, including Best in show: Design" },
    { src: img13, caption: "Unearthed: An all new website to showcase the teams expertise across innovation in the resources sector." },
    { src: img14, caption: "My Mind Check: An evidence-based digital mental health and wellbeing check-in for Australian schools."},
];

const Hcarousel = () =>{

    const[currentIndex,setCurrentIndex] = useState(0);

    const nextSlide = () =>{
        setCurrentIndex((prevIndex) =>
            prevIndex +4 >= images.length ? 0 :prevIndex +4
        );
    };

    const prevSlide = () =>{
        setCurrentIndex((prevIndex) =>
        prevIndex -4 < 0 ? images.length-4 :prevIndex-4
    );
    };

    return(
        <div className='carousel'>
            <button className='nav-button prev' onClick={prevSlide}>{"<"}</button>
            <div className='container1'>
                <div className='slides1'
                style={{transform: `translateX(-${currentIndex*(100/4)}%)`}}
                >
                    {images.map((image,index) =>(
                        <div className='slides2' key={index}>
                            <img src={image.src} alt={`Digital Experience ${index+1}` } />
                            <p className="image-caption">{image.caption}</p>
                        </div>
                    ))}
    
                </div>
            </div>
            <button className='nav-button next' onClick={nextSlide}>{">"}</button>
        </div>
    );
};
export default Hcarousel;