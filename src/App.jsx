import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
// import 'bootstrap/dist/js/bootstrap.js';
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Category from './components/Category';

function App() {
  console.log("app")

  return (
    <>
    <Navbar/>
    <Banner/>
    <Category/>
     <Footer/>
    </>
  )
}

export default App;
