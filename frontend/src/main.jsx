import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './Contexts/AuthContext';
import { Home } from './pages/home';
import { Events } from "./pages/Events";
import { Event } from './pages/event/';
import GlobalStyle from './styles/global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Event />
  </React.StrictMode>
)
