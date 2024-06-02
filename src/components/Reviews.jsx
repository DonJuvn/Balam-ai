import React, { useState } from "react";
const Carousel = ({ slides }) => {
   const [currentIndex, setCurrentIndex] = useState(0);

   const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
         prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
   };

   const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
         prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
   };

   return (
      <div id="reviews">
         <div className="container">
            <h3 id="title">Отзывы родителей</h3>
            <div className="carousel">
               <button id="arrows" onClick={prevSlide}>
                  <img
                     src={`${process.env.PUBLIC_URL}/img/prev.png`}
                     alt=""
                  />
               </button>
               <div className="slide">
                  <h2>{slides[currentIndex].name}</h2>
                  <p>{slides[currentIndex].text}</p>
               </div>
               <button id="arrows" onClick={nextSlide}>
                  <img src={`${process.env.PUBLIC_URL}/img/next.png`} alt="" />
               </button>
            </div>
         </div>
      </div>
   );
};

export default Carousel;
