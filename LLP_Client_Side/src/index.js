import React from 'react';
import { createRoot } from 'react-dom';

import App from './App.js';
import './index.css';

import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="793484170622-7sr6mefroddgqdi8fgithalrsd6on4hm.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
