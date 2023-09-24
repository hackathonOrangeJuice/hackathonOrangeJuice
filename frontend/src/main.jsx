import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './Contexts/AuthContext';
import { Home } from "./pages/Home/index"
import { Routes } from './routes';

import GlobalStyle from './styles/global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <AuthContextProvider>
    <Routes />
    </AuthContextProvider>
  </React.StrictMode>
)
