import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './App.jsx'
import './index.css'
import { FavouritesContextProvider } from './store/favourites-context';
    
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavouritesContextProvider>
      <App/>
    </FavouritesContextProvider>
  </React.StrictMode>
);