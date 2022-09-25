import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import App from './App';
import { StoreProvider } from './Store';
import './i18n';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <StoreProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>
);
