import logo from './logo.svg';
import './css/App.css';
import 'aos/dist/aos.css'; 
import {Sample, Header, SectionMain} from './components';
import React, { useEffect } from 'react';
import AOS from 'aos';

AOS.init({ duration: 1000 }); // 여기서 AOS를 한 번만 초기화

function App() {
  return (
    <div className="App">
      <Header />
      <SectionMain />
    </div>
  );
}

export default App;
