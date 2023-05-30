import React from 'react';
import ReactDOM from 'react-dom/client';
import Page from './app/page';
import reportWebVitals from './reportWebVitals';
import './styles/globals.css';
import {BrowserRouter} from 'react-router-dom';
import CryptoContext from './CryptoContext';
import "react-alice-carousel/lib/alice-carousel.css";
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <CryptoContext>
  <React.StrictMode>
  <BrowserRouter>
    <Page/>
    </BrowserRouter>
  </React.StrictMode>
  </CryptoContext>
);

reportWebVitals();
