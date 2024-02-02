import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App"
import Navebar from './components/navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Navebar />
  </React.StrictMode>
);


