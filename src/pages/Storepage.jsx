
import React from 'react';
import './../App';
import Header from './../components/Header';
import Menu from './../components/Menu';
import Logo from './../components/logo';
import Basket from './../components/Basket';
import Navigation from './../components/Navigation';
import NavForm from './../components/NavForm';

import Footer from './../components/Footer';
import Country from './../components/Country';
import Copyright from './../components/Copyright';
import {Routes, Route, Link } from 'react-router-dom';


const Storepage = ()  => {
  return (
    <div className='app-wrapper'>
      <div>
        <Header />
      </div>

      <div className='menu-wrapper container'>
        <Menu />  
        <Logo />
        <Basket />
      </div>

      <div className='navigation container'>
        <Navigation />
        <NavForm />
      </div>



      <div className='footer container'>
        <Footer />
      </div>

      <div className='footer-line '>
        <Country />
      </div>

      <div className='copyright'>
        <Copyright />
      </div>
    </div>
    


  );
}

export { Storepage };
