import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './App.jsx'
import './index.css'
import { FavouritesContextProvider } from './store/favourites-context.js';
    
ReactDOM.createRoot(document.getElementById("root")).render(
  <FavouritesContextProvider>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  </FavouritesContextProvider>
);