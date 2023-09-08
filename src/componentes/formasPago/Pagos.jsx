import React from 'react'
import './pagos.css'
const Pagos = () => {
    return (
        <>
            <div className='containerPagos'>
                <div className='pagos'>
                    <div>
                        <img src="../../../public/assets/imgs/credit-card.svg" alt="" />
                        <div>
                            <p>Tarjeta de crédito</p>
                            <a href="">Ver promociones bancarias</a>
                        </div>

                    </div>
                    <div>
                        <img src="../../../public/assets/imgs/debit-card.svg" alt="" />
                        <div>
                            <p>Tarjeta de débito</p>
                            <a href="">Ver más</a>
                        </div>

                    </div>
                    <div>
                        <img src="../../../public/assets/imgs/mercado-creditsv2.svg" alt="" />
                        <div>
                            <p>Cuotas sin tarjeta</p>
                            <a href="">Conocé Mercado Crédito</a>
                        </div>

                    </div>
                    <div>
                        <img src="../../../public/assets/imgs/payment-agreement.svg" alt="" />
                        <div>
                            <p>Efectivo</p>
                            <a href="">Ver más</a>
                        </div>

                    </div>
                    <div className='masMetodosDePago'>
                        <img src="../../../public/assets/imgs/view-more.svg" alt="" />
                        <a href=""></a>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Pagos