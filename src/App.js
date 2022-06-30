import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Menu from './components/menu/Menu'
import Logo from './components/menu/logo';
import Basket from './components/menu/Basket';
import Navigation from './components/navigation/Navigation';
import NavForm from './components/navigation/NavForm';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Container.styled';
import { MenuWrapperStyled } from './components/menu/MenuWrapper.styled';
import { StyledNavWrapper } from './components/navigation/NavigationWrapper.styled';
import  GlobalStyles  from './components/styles/Global';




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

          <Footer />
      
    </ThemeProvider>
  );
}

export default App;
