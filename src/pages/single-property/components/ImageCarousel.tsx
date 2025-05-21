import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ImageCarouselProps {
    images: string[];
    autoSlide?: boolean;
    autoSlideInterval?: number; // in milliseconds
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
    images,
    autoSlide = true,
    autoSlideInterval = 3000,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    useEffect(() => {
        if (!autoSlide || images.length !== 1) return;

        const interval = setInterval(() => {
            nextSlide();
        }, autoSlideInterval);

        return () => clearInterval(interval);
    }, [currentIndex, autoSlide, autoSlideInterval]);

    return (
        <div className="relative w-full h-[50vh] md:h-[100vh] overflow-hidden shadow-lg">
            <div className="flex h-full w-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((src, idx) => (
                    <img
                        key={idx}
                        src={src}
                        alt={`Slide ${idx + 1}`}
                        className="w-full flex-shrink-0 object-cover h-full "
                    />
                ))}
            </div>

            {/* Navigation Buttons */}
            <motion.button whileTap={{ scale: .95 }} whileHover={{ backgroundColor: '#fffff2' }} initial={{ backgroundColor: '#fffff291' }}
                onClick={prevSlide}
                className="absolute cursor-pointer top-1/2 left-2 transform -translate-y-1/2 bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow"
            >
                <img src="/line-md--chevron-small-left.svg" alt="chevron left" className="h-[15px] w-[15px]" />
            </motion.button>
            <motion.button whileTap={{ scale: .95 }} whileHover={{ backgroundColor: '#fffff2' }} initial={{ backgroundColor: '#fffff291' }}
                onClick={nextSlide}
                className="absolute cursor-pointer top-1/2 right-2 transform -translate-y-1/2 bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow"
            >
                <img src="/line-md--chevron-small-right.svg" alt="chevron left" className="h-[15px] w-[15px]" />
            </motion.button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`w-3 h-3 rounded-full ${idx === currentIndex ? "bg-white" : "bg-[#fffff291]"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
