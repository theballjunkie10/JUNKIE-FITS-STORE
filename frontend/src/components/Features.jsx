import React from 'react'
import img1 from "../assets/features/image7.png"
import img2 from "../assets/features/image9.png"

const Features = () => {
  return (
    <section className='max-padd-container pt-14 pb-20'>
      
       <div className='grid grid-cols-1 xl:grid-cols-[1.5fr_2fr] gap-6 gap-y-12 rounded-xl'>
        <div className='flexCenter gap-x-10'>
          <div>
            <img src={img1} alt="featureImg" height={77} width={222} className='rounded-full'/>
          </div>
          <div>
            <img src={img2} alt="featureImg" height={77} width={222} className='rounded-full'/>
          </div>
        </div>
        <div className='flexCenter flex-wrap sm:flex-nowrap gap-x-5'>
          <div className='p-4 rounded-3xl'>
            <h4 className='h4 capitalize'>Quality Product</h4>
            <p>Crafted with premium materials designed to last. Made for comfort style and everyday wear.</p>
          </div>
          <div className='p-4 rounded-3xl'>
            <h4 className='h4 capitalize'>Fast Delivery</h4>
            <p>Get your oder quickly with express delivery options. Track your package every step of the way.</p>
          </div>
          <div className='p-4 rounded-3xl'>
            <h4 className='h4 capitalize'>Secure Payment</h4>
            <p>Shop with confidence, with a major platform like stripe, your data is safe with us</p>
          </div>
        </div>
       </div>
    </section>
  )
}

export default Features