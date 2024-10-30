import React from "react";const Documents = () => {
   return (
      <div id="documents">
         <div className="container">
            <h1 id="title">Документы</h1>
            <div className="documents">
               <div className="document">
                  <h1>
                     (01) Лицензия
                  </h1>
                  <a href="https://drive.google.com/file/d/1sp6BynVdL0-kFI-AefPtqJ9pFd_ZRWMb/view">
                  </a>
               </div>
               <div className="document">
                  <h1>
                     (02) Устав
                  </h1>
                  <a href="https://drive.google.com/file/d/1tFYZmC5ZQRxTNoxnTbvrGmmQOgGJdYDD/view">
                  </a>
               </div>
               <div className="document">
                  <h1>
                     {" "}
                     (03) Расписание центров
                  </h1>
                  <a href="https://drive.google.com/file/d/1Ko6rZmJ85dYdNbqsQqRQab8Qi7oD_xTC/view">
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Documents;
