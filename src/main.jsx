import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'swiper/css/bundle';
import './index.css'
import { LikeProvide } from './context/LikeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LikeProvide>
        <App />
      </LikeProvide>
    </BrowserRouter>
  </StrictMode>,
)
