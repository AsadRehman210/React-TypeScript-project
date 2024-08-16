import React, { useState } from 'react';
import { slides } from '../data/Slides.ts';



const Slider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const goToPreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
            <div
                className={`absolute inset-0 transition-transform duration-500 ease-in-out transform bg-cover bg-center`}
                style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            >
                <div className="flex flex-col items-center justify-center h-full bg-blue-900 bg-opacity-50 px-8  md:px-8 lg:px-12">
                    <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                        {slides[currentSlide].heading}

                    </h2>

                    <p className='text-white text-justify text-sm sm:text-base md:text-lg lg:text-xl max-w-lg sm:px-20 sm:max-w-xl md:max-w-2xl lg:max-w-3xl mt-2 sm:mt-4 md:mt-6'>
                        {slides[currentSlide].content}
                    </p>
                </div>
            </div>
            <button
                onClick={goToPreviousSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-300 hover:text-white text-xl sm:text-2xl lg:text-3xl z-10"
            >
                <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
                onClick={goToNextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-300 hover:text-white text-xl sm:text-2xl lg:text-3xl z-10"
            >
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    );
};

export default Slider;
