import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Storepage } from './pages/Storepage';
import { Aboutpage } from './pages/Aboutpage';
import { Notfoundpage } from './pages/Notfoundpage';


// function App2() {
//   return (
//     <h1>Hello</h1>
//   )
//   }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="storepage" element={<Storepage />} />
        <Route path="aboutpage" element={<Aboutpage />} />
        <Route path="notfoundpage" element={<Notfoundpage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
