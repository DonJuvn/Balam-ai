import React from "react";const Center = () => {
   return (
      <div id="center">
         <div className="container">
            <div className="about">

               <div className="levels">
                  <div className="subtitles">
                     <h4 id="subtitle">Этапы</h4>
                  </div>

                  <div className="level">
                     <h5 id="level">1 Этап</h5>
                     <div className="actions">
                        <p id="action">
                           Для посещения нашего центра, Вам необходимо иметь
                           следующий перечень документов:
                        </p>
                        <p>1. Мед.карта</p>
                        <p>2. Заявление (в «ЦОН-е»)</p>
                        <p>3. Справка об инвалидности </p>
                        <p>
                           4. Выписка ИПР (должно быть прописано дневное
                           прибывание или же полустационар)
                        </p>
                        <p>5. Свидетельство о рождении ребёнка</p>
                        <p>6. Уд.личности родителя</p>
                     </div>
                  </div>
                  <div className="level">
                     <h5 id="level">2 Этап</h5>
                     <div className="actions">
                        <p id="action">Сдать: </p>
                        <p>Кровь, моча, гельминты, яйцеглист</p>
                     </div>
                  </div>
                  <div className="level">
                     <h5 id="level">3 Этап</h5>
                     <div className="actions">
                        <p>После сбора документов надо сдать в ЦОН</p>
                     </div>
                  </div>
                  <div className="level">
                     <h5 id="level">4 Этап</h5>
                     <div className="actions">
                        <p>Заполнить медицинскую карту полустационара </p>
                     </div>
                  </div>
                  <p>
                     На каждом этапе методист обсуждает с родителями траекторию
                     дальнейшего движения, вносимые корректировки в программу,
                     предъявляемые требования.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Center;
