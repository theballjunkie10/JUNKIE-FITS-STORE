import React from 'react'
import Title from '../components/Title'
import { FaCheck, FaStar } from 'react-icons/fa6'
import user3 from "../assets/testimonials/user3.jpg"
import user4 from "../assets/testimonials/user4.jpeg"
import product1 from "../assets/product_1.png"
import product2 from "../assets/product_2_1.png"
import product3 from "../assets/product_3.png"
import product4 from "../assets/product_6.png"
import Footer from '../components/Footer'

const Testimonials = () => {
  return (
    <div>
      <div className='bg-primary mb-16'>
        <div className='max-padd-container py-10'>
      
          <div className='grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-20 mb-16 rounded-2xl'>
        
            <div className='flex items-start justify-between flex-col gap-10'>
              <Title title1={'Customers'} title2={'Review'} title1Styles={'pb-10'} paraStyles={'!block'} />
              <div className='flex flex-col gap-1 bg-white p-2 rounded'>
                <div className='flex text-secondary gap-2'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className='medium-14'>more than <b>+35,000 reviews</b></div>
              </div>
            </div>

          
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-7'>
             
              <div className='glex flex-col gap-1 rounded-lg p-4 bg-white'>
                <div className='flexBetween'>
                  <div className='flexCenter gap-x-2'>
                    <img src={user3} alt="userImg" height={44} width={44} className='rounded-full' />
                    <h5 className='bold-14'>David Chinyanta</h5>
                  </div>
                  <div className='bg-secondary text-white rounded-full flexCenter gap-x-2 p-1 px-2 text-xs font-semibold'>
                    <FaCheck />
                    Verified
                  </div>
                </div>
                <hr className='h-[1px] w-full my-2' />
                <div className='flex gap-x-1 text-secondary mt-5 mb-1 text-xs'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h4 className='h4'>High Quality</h4>
                <p>I absolutely love shopping here! The quality of the clothes is amazing, and everything fits so well. The delivery was express and i received my clothes just the day after making the purchse - without a doubt calling again 
                </p>
                <div className='flex gap-x-1 mt-5'>
                  <img src={product1} alt="prdctImg" height={44} width={44} className='rounded aspect-square object-cover' />
                  <img src={product2} alt="prdctImg" height={44} width={44} className='rounded aspect-square object-cover' />
                </div>
              </div>
              <div className='glex flex-col gap-1 rounded-lg p-4 bg-white'>
                <div className='flexBetween'>
                  <div className='flexCenter gap-x-2'>
                    <img src={user4} alt="userImg" height={44} width={44} className='rounded-full' />
                    <h5 className='bold-14'>Samuel Sosa Jr</h5>
                  </div>
                  <div className='bg-secondary text-white rounded-full flexCenter gap-x-2 p-1 px-2 text-xs font-semibold'>
                    <FaCheck />
                    Verified
                  </div>
                </div>
                <hr className='h-[1px] w-full my-2' />
                <div className='flex gap-x-1 text-secondary mt-5 mb-1 text-xs'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h4 className='h4'>Exquisite Design
                </h4>
                <p>
                  This store is my go to for a trendy look all year round. realistic adverts corresponding to the goods i recieve. Their customer service is top notch
                </p>
                <div className='flex gap-x-1 mt-5'>
                  <img src={product3} alt="prdctImg" height={44} width={44} className='rounded aspect-square object-cover' />
                  <img src={product4} alt="prdctImg" height={44} width={44} className='rounded aspect-square object-cover' />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Testimonials