import { Route, Routes, NavLink } from 'react-router-dom';
import MyForm from './pages/Form';
import CV from './pages/Cv';

import './App.css';


function App() {
  return (
    <div>
    <div className="back"></div>
    <nav>
      <NavLink to="/"> Formulaire de cv</NavLink>
      <NavLink to="/cv">Resultat cv</NavLink>
    </nav>
    <Routes>
      <Route path="/" element={<MyForm />} />
      <Route path="/cv" element={<CV />} />
    </Routes>  
    </div>
  );
}

export default App;