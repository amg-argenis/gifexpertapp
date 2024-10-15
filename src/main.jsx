//  Estas son las importaciones globales del Sitio
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GifExpertApp }  from "./GifExpertApp";

import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>,
)
