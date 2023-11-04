import InfoPers from "./components/Infopers";
import Footer from "./components/Footer";
import Cmtc from "./components/Cmtc";
import ObjProf from "./components/ObjProf";
import Formation from "./components/Formation";
import Interet from "./components/Interet";
import "./App.css";

function App() {
  return (
    <div className="app">
      <InfoPers
        name="Salah Eddine"
        bdate="01/01/2003"
        bloca="Casablanca"
        sf="Célibataire"
      />
      <div className="section">
        <Cmtc />
        <ObjProf />
        <Formation />
        <Interet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
