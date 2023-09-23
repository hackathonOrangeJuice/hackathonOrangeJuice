import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/Home/';
import { Events } from "./pages/Events";
import { Event } from './pages/Event/';
import GlobalStyle  from './styles/global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Events />
  </React.StrictMode>,
)
