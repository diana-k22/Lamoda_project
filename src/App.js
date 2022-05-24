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
import { ThemeProvider } from 'styled-components';
import { Container, GlobalStyles } from '@mui/material';
import { MenuWrapperStyled } from './components/styles/MenuWrapper.styled';
import { StyledNavWrapper } from './components/styles/NavigationWrapper.styled';



const theme = {
  colors: {
    header: 'black',
    body: 'white',
    footer: '#003333',
  },
  
  mobile: '768px',
}

function App() { {/** Это шаблон главной страницы  */}
  return (
    
    <ThemeProvider theme={theme} >
      <GlobalStyles/>
        <Header />
        <Container>
          <MenuWrapperStyled>
            <Menu />  
            <Logo />
            <Basket />
          </MenuWrapperStyled>
        </Container>

        <Container>
          <StyledNavWrapper>
            <Navigation />
            <NavForm />
          </StyledNavWrapper>
        </Container>
        
      <Container>
        <Outlet /> {/**В Outlet будет подставляться контент */}
      </Container>
      
      <div className='footer'>
        <Footer />
      </div>

    </ThemeProvider>
  );
}

export default App;
