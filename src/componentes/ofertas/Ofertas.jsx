import React from 'react'
import './ofertas.css'
import ProductComponent from '../productComponent/ProductComponent'
import productos from '../productComponent/productos';
const Ofertas = () => {
  return (
   <>
   <div className='container'>
     <ProductComponent productos={productos} /> 
   </div>
   </>
  )
}

export default Ofertas