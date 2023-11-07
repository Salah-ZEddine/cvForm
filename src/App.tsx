import React from 'react';
import { Route, Outlet } from 'react-router-dom';
import CV from './pages/cv';
import MyForm from './pages/form';

import './App.css';


function App() {
  return (
    <div>
      <Route path="form" element={<MyForm />} />
      <Route path="cv" element={<CV />} />
    </div>
  );
}

export default App;