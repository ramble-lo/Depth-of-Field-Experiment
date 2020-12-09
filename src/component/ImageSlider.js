import React, {useState} from 'react'
import '../css/ImageSlider.css';
import {SliderData} from './SliderData';
import {FaArrowUp, FaArrowDown} from 'react-icons/fa'

const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length
    const zero = 0;
    // <img src="/images/Y01.jpg" className="photo"/>
    // onClick={nextSlide}
    //  onClick={prevSlide}
    const resetToFirst = () => {
        setCurrent(current > 0 ? 0 : current + 1);
    };

    const resetToLast = () => {
        setCurrent(current === 65 ? current - 1 : 65);
    };

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    console.log(current);

    // if (!Array.isArray(slides) || slides.length <= 0) {
    //     return null;
    // }

    return (
        <>  
            <div className="slider">
                <FaArrowDown className="left-arrow" onClick={prevSlide} />
                <FaArrowUp className="right-arrow" onClick={nextSlide} />
                {SliderData.map((slide, index)=>{
                    return  (
                        <div
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                        >
                            {index === current && (
                            <img src={slide.image} alt='travel image' className='image' />
                            )}
                        </div>
                    );
                })}
            </div>
            <h1>對比景-視覺比對法</h1>
            <h1>{current + 1}</h1>
            <div className="reset" onClick={resetToFirst}>重置到最前</div>
            <div className="reset" onClick={resetToLast}>重置到最後</div>
        </>
    )
}


export default ImageSlider
