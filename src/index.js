import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Logo from './components/menu/logo';
import { MainContent } from './pages/PageMain/MainContent';
import { StorePageForWomen } from './pages/PageWomen/StorePageForWomen';
import { StorePageForMan } from './pages/PageMan/StorePageForMan';
import { StorePageForChildren } from './pages/PageForChildren/StorePageForChildren';
import { NotFoundPage } from './pages/PageNotFound/NotFoundPage';
import { ProductDetails } from './components/CollectionCards/ProductDetails';
import Signin from './components/menu/SignIn/Signin'
import { filterCategory, getProductById } from './api/api';
import SignUp from './components/menu/signUp/SignUp';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<App />} >  {/**Указали у родителя шаблон App, который будет использоваться на всех страницах*/}
          <Route path='/' element={<MainContent />} /> {/**Здесь указываем путь к страницам */}
          <Route path="logo" element={<Logo />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="store-page-for-women" element={<StorePageForWomen  
            filterCategory={filterCategory} />} />
          <Route path="products/:productId" element={<ProductDetails
            getProductById={getProductById}/>} /> {/**Создали роут для перехода страницы при клике, который читает айдишник  :- Способ сказать роуту что /:блабла является параметром - https://reactrouter.com/docs/en/v6/getting-started/overview#reading-url-parameters */}
          <Route path="store-page-for-man" element={<StorePageForMan 
            filterCategory={filterCategory}/>} />
          <Route path="store-page-for-children" element={<StorePageForChildren 
            filterCategory={filterCategory}/>} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
