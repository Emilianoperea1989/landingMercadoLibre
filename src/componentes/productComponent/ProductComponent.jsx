import React from 'react'
import './productComponent.css'
const ProductComponent = ({ productos }) => {
    return (
        <> 
        <div>
        <div className='container-titulo-oferta'>
        <h2>Ofertas</h2>
        <a href="">Ver todas</a>
      </div>
        <div className='contenedor-tarjetas'>
                {productos.map((producto, index) => (
                    <div className='tarjetaProductos' key={index}>
                        <div className='contenedor-imag' >
                            <img className='img-producto' src={producto.imagen} alt={producto.titulo} />
                        </div>
                        <h3>{producto.titulo}</h3>
                        <p>{producto.precio}</p>

                    </div>
                ))}</div>
        </div>
       
           
        </>
    )
}

export default ProductComponent