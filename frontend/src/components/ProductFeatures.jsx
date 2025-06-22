import React from 'react'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { TbArrowBackUp, TbTruckDelivery } from 'react-icons/tb'

const ProductFeatures = () => {
  return (
    <section className='bg-primary rounded-xl mt-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 rounded-xl'>
            <div className='flexCenter gap-x-4 p-2 rounded-3xl'>
                <div className='text-3xl'><TbArrowBackUp className='mb-3 text-yellow-500'/></div>
                <div>
                    <h4 className='h4 capitalize'>Easy Return</h4>
                    <p>We get it- sometimes things dont work out. Thats why we've, made returns as simple as possible! No fuss. fast refunds</p>
                </div>
            </div>
            <div className='flexCenter gap-x-4 p-2 rounded-3xl'>
                <div className='text-3xl'><TbTruckDelivery className='mb-3 text-red-500'/></div>
                <div>
                    <h4 className='h4 capitalize'>Fast Delivery</h4>
                    <p>Get your oder quickly with express delivery options. Track your package every step of the way!</p>
                </div>
            </div>
            <div className='flexCenter gap-x-4 p-2 rounded-3xl'>
                <div className='text-3xl'><RiSecurePaymentLine className='mb-3 text-secondary'/></div>
                <div>
                    <h4 className='h4 capitalize'>Secure Payment</h4>
                    <p>Shop with confidence, with a major platform like stripe, your data is safe with us</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductFeatures