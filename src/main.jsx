import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './componentes/header/Header.jsx'
import Carousel  from './componentes/carousel/Carousel.jsx'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Pagos from './componentes/formasPago/Pagos.jsx'
import Ofertas from './componentes/ofertas/Ofertas.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Header/>
    <App />
    <Carousel/>
    <Pagos/>
    <Ofertas/>
  </React.StrictMode>,
)
