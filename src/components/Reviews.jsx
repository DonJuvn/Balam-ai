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
            <h1 id="title">Отзывы родителей</h1>
            <div className="reviews">
               <div className="container">
                  <div className="img">
                     <img src="img/avatar.png" alt="" />
                  </div>
                  <div className="main">
                     <p>
                        Мы искренне благодарны всем, кто поддерживает нашу
                        работу и делится своими впечатлениями. Ваши отзывы
                        вдохновляют нас и помогают улучшать наши программы. Вот
                        что говорят родители, учителя и сами дети о наших
                        инициативах:
                     </p>
                     <div className="carousel">
                        {/* <button id="arrows" onClick={prevSlide}>
                        <img
                           src={`${process.env.PUBLIC_URL}/img/prev.png`}
                           alt=""
                        />
                     </button> */}
                        <div className="slide">
                           {/* <h2>{slides[currentIndex].name}</h2> */}
                           <p id="slider">{slides[currentIndex].text}</p>
                        </div>
                        <div className="buttons">
                           <button id="arrows" onClick={prevSlide}>
                              <img
                                 src={`${process.env.PUBLIC_URL}/img/prev.png`}
                                 alt=""
                              />
                           </button>
                           <button id="arrows" onClick={nextSlide}>
                              <img
                                 src={`${process.env.PUBLIC_URL}/img/next.png`}
                                 alt=""
                              />
                           </button>
                        </div>
                        {/* <button id="arrows" onClick={nextSlide}>
                        <img
                           src={`${process.env.PUBLIC_URL}/img/next.png`}
                           alt=""
                        />
                     </button> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Carousel;
