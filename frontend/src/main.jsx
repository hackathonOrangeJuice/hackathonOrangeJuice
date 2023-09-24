import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './Contexts/AuthContext';
import { Home } from './pages/home';
import { Events } from "./pages/Events";
import { Event } from './pages/Event/';
import GlobalStyle from './styles/global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Event />
  </React.StrictMode>
>>>>>>> a46098cf1cd69d148dc4e928919dcb3f3343af7d
)
