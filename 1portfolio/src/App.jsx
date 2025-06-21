import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Navbar from './assets/components/Navbar';
import About from './assets/components/About';
import Contact from './assets/components/Contact';
import Skills from './assets/components/Skills';


function App() {


  return (
    <>
     
      <BrowserRouter>
     <Navbar/>
      <Routes>
       
     
        <Route path="/" element={<About/>} />
        <Route path="/Skills" element={<Skills/>} />
        <Route path="/Contact" element={<Contact/>} />
     
        
       
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
