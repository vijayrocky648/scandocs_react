
import './App.css';
import React, { useEffect } from "react";
import HEADER from './components/Header/index'
import { HOMEPAGE } from './components/HomePage/homepage';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1500,
    });
  })
  return (
    <div>
      <HEADER/>
      <HOMEPAGE/>
    </div>
  );
}

export default App;
