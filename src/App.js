import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Logo from './components/logo';
import Busket from './components/Busket';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <div className='menu-wrapper container'>
        <Menu />  
        <Logo />
        <Busket />
      </div>
  
    </div>
 

  );
}

export default App;
