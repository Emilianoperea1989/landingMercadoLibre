import React from 'react'

const ProductComponent = ({ productos }) => {
    return (
        <>
            <div>
                {productos.map((producto, index) => (
                    <div key={index}>
                    <h3>{producto.titulo}</h3>
                    <p>{producto.precio}</p>
                    <img src={producto.imagen} alt={producto.titulo} />
                  </div>
                ))}</div>
        </>
    )
}

export default ProductComponent