import "./App.css";

import {
   BrowserRouter as Router,
   Route,
   Routes,
   Navigate,
} from "react-router-dom";
import Menu from "./components/Menu";
import About from "./components/About";
import About2 from "./components/About2";
// import GoogleMap from "./components/Addresses";
import Documents from "./components/Documents";
import Carousel from "./components/Reviews";
import Footer from "./components/Footer";
import Equipment from "./components/Equipment";
import FAQ from "./components/FAQ";

function App() {
   //  const center = { lat: 51.5074, lng: -0.1278 }; // London coordinates
   //  const zoom = 10;
   //  const addresses = [
   //     { lat: 51.1508, lng: 71.4313, name: "М.Жумабаева 19/4" },
   //     { lat: 51.1379, lng: 71.4377, name: "Алпамыс 10" },
   //     { lat: 51.1383, lng: 71.4271, name: "А.Токпанова 60" },
   //     { lat: 51.1675, lng: 71.4127, name: "проспект Сарыарка 48/2" },
   //     { lat: 51.1604, lng: 71.4701, name: "Ә.Бектурова 7" },
   //  ];

   return (
      <Router>
         <div>
            <Menu />
            <About2 />
            <About />
            <Routes>
               <Route path="/" exact element={<Main />} />
               <Route path="/correction" element={<CorrectionPage />} />
               <Route path="/equipment" element={<EquipmentPage />} />
               <Route path="/FAQ" element={<FAQPage />} />
            </Routes>
            <Footer />
         </div>
      </Router>
   );
}

const Main = () => {
   const slides = [
      {
         name: "@botagoz_singatulina",
         text: "Огрромная благодраность воспитателям и всему персоналу центра за беграничное терпение, самоотверженный труд и любовь к нашему Мансуру и всем особяшкам нашего центра! Особая благодарность Маншук Газизовне и Карлыгаш Аширбековой. Спасибо, что вы у нас есть! Уже два года с удовольствием посещаем этот центр! Не знаю, что бы я без вас делала🌹🌹🌹🌹🌹",
      },
      {
         name: "@lena_lukaszewicz",
         text: "Мы первооткрыватели😍 и вы Балам-ай самые лучшие!!!❤️❤️❤️ Лучшие, что пошли нам на встречу и провели шикарнейший праздник для моего сына🤗💋💕. Мы рады, что ходим в ваш центр❤️. Вы очень добродушные и отзывчивые😍. Благодарим вас за праздник для всех деток💐💐💐💋💋💋💕💕💕",
      },
      {
         name: "@kimet_esenali",
         text: "Осы орталықтың апайларын бізге Құдайдың өзі жіберді деймін, балаларымызға жақсы қарайды, өзіміздің екінші үйіміз деп санаймын. Осы орталықтың басшысы Асель Рамазановаға мың алғыс🙏❤️ Осындай орталық ашып жағдай жасап қойғанына🙏❤️🌹 Біз апайларымызды қатты сыйлап жақсы көреміз❤️💋💕🌹 Балаларымызды жақсы көріп, өз балаларыңыздай күтіп отырғандарыңыз үшін рақмет. Жақсылықтарыңыз Алладан қайтсын🙏❤️",
      },
   ];

   return (
      <>
         <Documents />
         <Carousel slides={slides} />
         {/* <GoogleMap center={center} zoom={zoom} locations={addresses} /> */}
      </>
   );
};

const CorrectionPage = () => {
   return <>{/* <Correction /> */}</>;
};
const EquipmentPage = () => {
   return (
      <>
         <Equipment />
      </>
   );
};
const FAQPage = () => {
   return (
      <>
         <FAQ />
      </>
   );
};

export default App;
