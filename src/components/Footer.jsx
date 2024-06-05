import React from "react";const Footer = () => {
   return (
      <div id="footer">
         <div className="container">
            <div className="footer">
               <p>
                  © 2009-2023 ОФ «Балам-ай»
                  <br />
                  Call-center +7 707 915 7363
               </p>
               <div className="social">
                  <a href="mailto:of_balamay@mail.ru">
                     <img
                        src={`${process.env.PUBLIC_URL}/img/mail.png`}
                        alt=""
                     />
                  </a>
                  <a href="tel:+77079157363">
                     <img
                        src={`${process.env.PUBLIC_URL}/img/telephone.png`}
                        alt=""
                     />
                  </a>
                  <a href="https://instagram.com/balam_ai?igshid=NmZiMzY2Mjc=">
                     <img
                        src={`${process.env.PUBLIC_URL}/img/instagram.png`}
                        alt=""
                     />
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
