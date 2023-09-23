import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/home/home';
import GlobalStyle  from './styles/global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>,
)
