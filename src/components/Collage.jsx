import React from "react";
const images = [
   "img/collage1.jpg",
   "img/collage2.jpg",
   "img/collage3.jpg",
   "img/collage8.jpg",
   "img/collage5.jpg",
   "img/collage7.jpg",
   "img/collage4.jpg",
   "img/collage9.jpg",
   "img/collage10.jpg",
];

const Collage = () => {
   return (
      <div id="collage">
         <div className="container">
            <h4>
               С целью увеличения охвата детей, а также облегчения подвоза
               родителям в центры открыты в 4-х районах города. <br />В данное
               время работает 5центров «Балам-ай», услуги оказываются по
               адресам: <br />
               <span>
                  <a href="https://www.instagram.com/reel/C9MYng4sQ1e">
                     Жанкент 100, <br />
                  </a>
               </span>
               <span>
                  <a href="https://www.instagram.com/reel/CwwnGw5MhTU">
                     Алпамыс 10, <br />
                  </a>
               </span>
               <span>
                  <a href="https://www.instagram.com/reel/C8Zj-8wiK2m">
                     Токпанова 52, <br />
                  </a>
               </span>
               <span>
                  <a href="https://www.instagram.com/reel/Cw1ywmiM10P">
                     проспект Сарыарка 48/2, <br />
                  </a>
               </span>
               <span>
                  <a href="https://www.instagram.com/reel/CxC8CVfMXvS">
                     Бектурова 7.
                     <br />
                  </a>
               </span>
            </h4>
         </div>
         <div className="collage-container">
            {images.map((image, index) => (
               <div key={index} className="collage-item">
                  <img
                     src={process.env.PUBLIC_URL + "/" + image}
                     alt={`Collage ${index + 1}`}
                  />
               </div>
            ))}
         </div>
      </div>
   );
};

export default Collage;
