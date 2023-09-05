import React from 'react'
import './header.css'

const Header = () => {
  return (
    <>
      <div className=' headerFlex'>
        <nav className='headerNav'>
          <div className='nav-top-left'> <img className='logoMeli' src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.4.1/mercadolibre/logo__large_plus.png" alt="" /></div>
          <div className='nav-top-center'><input className='buscador' type="text" placeholder='Buscar productos, marcas y más...' maxlength="120" />
            <button className='lupaBuscador'></button>
          </div>
          <div className='nav-top-right'> <img className='logoDisney' src="../../../public/assets/imgs/D_NQ_957153-MLA69318147677_052023-OO.webp" alt="" /></div>
          <div className='nav-bottom-left'>
            <img className='logoEncuentro' src="../../../public/assets/imgs/puntoEncuentro.png" alt="" />
            <div className='localizacion'>
              <span className='localizacionP1' >Enviar a</span>

              <span  className='LocalizacionProvincia'> Cordoba</span>
            </div>
          </div>

          <div className='nav-botton-center'>
            <div className='navMenu'>
              <ul className='menuList'>
                <li className='menuItem'><a href="">Categorías</a></li>
                <li className='menuItem'><a href="">Ofertas</a></li>
                <li className='menuItem'><a href="">Historial</a></li>
                <li className='menuItem'><a href="">Supermercado</a></li>
                <li className='menuItem'><a href="">Moda</a></li>
                <li className='menuItem'><a href="">Vender</a></li>
                <li className='menuItem'><a href="">Ayuda</a></li>
              </ul>
            </div>
          </div>
          <div className='nav-bottom-right'>
              <nav className='loginMenu'>
                <a href="">Creá tu cuenta</a>
                <a href="">Ingresá</a>
                <a href="">Mis Compras</a>
                <a href=""><img  className="carrito" src="../../../public/assets/imgs/carrito-de-compras.png" alt="" /></a>
              </nav>
              

          </div>
        </nav>
      </div>

    </>
  )
}

export default Header