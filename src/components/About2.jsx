import React from "react";
const About2 = () => {
   return (
      <div id="about">
         <div className="container">
            <div className="about">
               <div className="main">
                  <h1>
                     Общественный Фонд "Благотворительный фонд поддержки
                     детей-инвалидов "Балам-ай"
                  </h1>
                  <div className="adresses">
                     <p>В данное время работает 5центров «Балам-ай», услуги оказываются
                     по адресам:</p>
                     <div className="items">
                        <div className="item">
                           <a href="#">Жанкент 100</a>
                        </div>
                        <div className="item">
                           <a href="#">Токпанова 52</a>
                        </div>
                        <div className="item">
                           <a href="#">Бектурова 7</a>
                        </div>
                        <div className="item">
                           <a href="#">Алпамыс 10</a>
                        </div>
                        <div className="item">
                           <a href="#">проспект Сарыарка 48/2</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="img">
                  <img src="img/main.png" alt="" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default About2;
