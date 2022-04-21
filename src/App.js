import logo from './logo.svg';
import React from 'react';
import './App.scss';
import Header from './components/Header';
import Menu from './components/Menu';
import Logo from './components/logo';
import Basket from './components/Basket';
import Navigation from './components/Navigation';
import NavForm from './components/NavForm';
import Main from './components/Main';
import Content from './components/Content';
import Footer from './components/Footer';
import Country from './components/Country';
import Copyright from './components/Copyright';
import {Routes, Route, Link, Outlet } from 'react-router-dom';
import { Test } from './components/MainContent';


function App() { {/** Это шаблон главной страницы  */}
  return (
    <div className='app-wrapper'>
      <Header />
      <div className='menu-wrapper container'>
        <Menu />  
        <Logo />
        <Basket />
      </div>

      <div className='navigation container'>
        <Navigation />
        <NavForm />
      </div>

      <Outlet /> {/**В Outlet будет подставляться контент */}

      <div className='footer container'>
        <Footer />
      </div>

    </div>
  );
}

export default App;
