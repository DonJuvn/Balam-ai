import React from "react";
const Menu = () => {
   return (
      <div id="menu">
         <div className="container">
            <div className="nav">
               <a href="/">О нас</a>
               <a href="/correction">Коррекция</a>
               <a href="/equipment">Оборудование</a>
               <a href="/faq">FAQ</a>
               <a id="donation" href="https://kaspi.kz/pay/OBalamaiAi?started_from=QR">
                  Пожертвовать
               </a>
            </div>
         </div>
      </div>
   );
};

export default Menu;
