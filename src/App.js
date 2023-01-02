import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import PagesAplicativo from './Pages/Aplicativo/Aplicativo';

import PagesHome from './Pages/Home/home';
import PagesLogin from './Pages/Login/Login';
import PageSignUp from './Pages/SignUp/SignUp';

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<PagesHome/>}/>
        <Route path='/login' element={<PagesLogin/>}/>
        <Route path='/signup' element={<PageSignUp/>}/>
        <Route path='/Aplicativo' element={<PagesAplicativo/>}/>
      </Routes>
    </Router>
  );
}
