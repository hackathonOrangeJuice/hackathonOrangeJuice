import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/home';
import { Events } from "./pages/Events";
import { Event } from './pages/Event/';
import GlobalStyle  from './styles/global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
<<<<<<< HEAD
    <Events />
=======
    <Event />
>>>>>>> 9cadc4861da5e27ae44cb39733a22b4bb32fc8a1
  </React.StrictMode>,
)
