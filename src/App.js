import React from 'react';
import './App.scss';
import Header from './components/Header';
import Menu from './components/Menu';
import Logo from './components/logo';
import Basket from './components/Basket';
import Navigation from './components/Navigation';
import NavForm from './components/NavForm';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';



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

      <div className='footer'>
        <Footer />
      </div>

    </div>
  );
}

export default App;
