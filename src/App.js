import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu";
import About from "./components/About";
import Collage from "./components/Collage";
import GoogleMap from "./components/Addresses";

function App() {
   const center = { lat: 51.5074, lng: -0.1278 }; // London coordinates
   const zoom = 10;
   const addresses = [
      { lat: 51.1508, lng: 71.4313, name: "М.Жумабаева 19/4" },
      { lat: 51.1379, lng: 71.4377, name: "Алпамыс 10" },
      { lat: 51.1383, lng: 71.4271, name: "А.Токпанова 60" },
      { lat: 51.1675, lng: 71.4127, name: "проспект Сарыарка 48/2" },
      { lat: 51.1604, lng: 71.4701, name: "Ә.Бектурова 7" },
   ];

   return (
      <>
         <Menu />
         <About />
         <Collage />
         <GoogleMap center={center} zoom={zoom} locations={addresses} />
      </>
   );
}

export default App;
