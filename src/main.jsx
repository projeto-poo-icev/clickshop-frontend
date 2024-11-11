import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from './App.jsx'
import { GlobalProvider } from './context/GlobalContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <GlobalProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </GlobalProvider>
  </StrictMode>,
)
