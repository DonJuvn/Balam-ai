import React from "react";
const Menu = () => {
   return (
      <div id="menu">
         <div className="container">
            <div className="nav">
               <a href="/">О нас</a>
               <a href="/correction">Коррекция</a>
               <a href="/equipment">Оборудование</a>
               <a href="about">Документы</a>
               <a href="about">Отзывы</a>
               <a id="donation" href="#">
                  Пожертвовать
               </a>
            </div>
         </div>
      </div>
   );
};

export default Menu;
