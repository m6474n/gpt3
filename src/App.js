import React from 'react';
// import Article from "./components/article/Article";
// import Brand from "./components/brand/Brand";
// import Cta from "./components/cta/CTA";
// import Feature from "./components/feature/Feature";
// import Navbar from "./components/navbar/Navbar";


import { Brand,CTA,Navbar } from './components';
import "./App.css";
import { Blog,Features,Header,Footer,Possibility,WhatGPT3 } from './containers';


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/> 
      </div>
           <Brand/>
           <WhatGPT3/>
           <Features/>
           <Possibility/>
           <CTA/>
           <Blog/>
           <Footer/>
      
      </div>
  )
}

export default App