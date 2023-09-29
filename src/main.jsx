import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from '@material-tailwind/react';
import { ArtworkProvider } from './context/ArtworkContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ArtworkProvider>
        <App />
      </ArtworkProvider>
    </ThemeProvider>
  </React.StrictMode>
);
