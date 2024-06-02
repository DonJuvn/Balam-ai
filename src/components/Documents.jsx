import React from "react";
const Documents = () => {
   return (
      <div id="documents">
         <div className="container">
            <h3 id="title">Документы</h3>
            <div className="documents">
               <div className="document">
                  <img
                     src={`${process.env.PUBLIC_URL}/img/license.png`}
                     alt=""
                  />
                  <h1>Лицензия</h1>
                  <a href="https://drive.google.com/file/d/1sp6BynVdL0-kFI-AefPtqJ9pFd_ZRWMb/view">
                     Посмотреть
                  </a>
               </div>
               <div className="document">
                  <img
                     src={`${process.env.PUBLIC_URL}/img/regulation.png`}
                     alt=""
                  />
                  <h1>Устав</h1>
                  <a href="https://drive.google.com/file/d/1tFYZmC5ZQRxTNoxnTbvrGmmQOgGJdYDD/view">
                     Посмотреть
                  </a>
               </div>
               <div className="document">
                  <img
                     src={`${process.env.PUBLIC_URL}/img/scheduling.png`}
                     alt=""
                  />
                  <h1>Расписание центров</h1>
                  <a href="https://drive.google.com/file/d/1Ko6rZmJ85dYdNbqsQqRQab8Qi7oD_xTC/view">
                     Посмотреть
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Documents;
