import React, { useState } from 'react'
import upload_icon from "../assets/upload_icon.png"
import axios from 'axios'
import { backend_url } from '../App'
import { toast } from 'react-toastify'

const Add = ({ token }) => {

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Men')
  const [subCategory, setSubCategory] = useState('Topwear')
  const [popular, setPopular] = useState(false)
  const [sizes, setSizes] = useState([])

  const [loading, setLoading] = useState(false)

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const formData = new FormData()

      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("popular", popular)
      formData.append("sizes", JSON.stringify(sizes))

      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await axios.post(backend_url + '/api/product/add', formData, { headers: { token } })

      if (response.data.success) {
        toast.success(response.data.message)
        setName("")
        setDescription("")
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice("")
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }finally {
      setLoading(false)
    }
  }

  return (
    <div className='px-2 sm:px-8 mt-2 sm:mt-14 pb-16'>
      <form onSubmit={onSubmitHandler} className='flex flex-col gap-y-3 medium-14 lg:w-[777px]'>
        <div className='w-full'>
          <h5 className='h5'>Product Name</h5>
          <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Write here...' className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-full max-w-lg' />
        </div>
        <div className='w-full'>
          <h5 className='h5'>Product Description</h5>
          <textarea onChange={(e) => setDescription(e.target.value)} value={description} type="text" rows={5} placeholder='Write here...' className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-full max-w-lg' />
        </div>
        
        <div>
          <div className='flex flex-col sm:flex-row gap-4'>
            <div className='flex flex-row gap-4'>
              <div>
                <h5 className='h5'>Category</h5>
                <select onChange={(e) => setCategory(e.target.value)} className='max-w-20 px-3 py-2 text-gray-30 ring-1 ring-slate-900/5 bg-white rounded'>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Kids">Kids</option>
                </select>
              </div>
              <div>
                <h5 className='h5'>Sub Category</h5>
                <select onChange={(e) => setSubCategory(e.target.value)} className='max-w-28 px-3 py-2 text-gray-30 ring-1 ring-slate-900/5 bg-white rounded'>
                  <option value="Topwear">Topwear</option>
                  <option value="Bottomwear">Bottomwear</option>
                  <option value="Winterwear">Winterwear</option>
                </select>
              </div>
            </div>
            <div>
              <h5 className='h5'>Product Price</h5>
              <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" placeholder='10' className='px-3 py-2 bg-white rounded max-w-24 ring-1 ring-slate-900/5' />
            </div>
          </div>
        </div>
        <div>
          <h5 className='h5'>Product Sizes</h5>
          <div className='flex gap-3 mt-2'>
            <div onClick={() => setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S") : [...prev, "S"])}><span className={`${sizes.includes("S") ? "bg-tertiary text-white" : "bg-white"} text-gray-30 rounded ring-1 ring-slate-900/5 px-3 py-1 cursor-pointer`}>S</span></div>
            <div onClick={() => setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev, "M"])}><span className={`${sizes.includes("M") ? "bg-tertiary text-white" : "bg-white"} text-gray-30 rounded ring-1 ring-slate-900/5 px-3 py-1 cursor-pointer`}>M</span></div>
            <div onClick={() => setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev, "L"])}><span className={`${sizes.includes("L") ? "bg-tertiary text-white" : "bg-white"} text-gray-30 rounded ring-1 ring-slate-900/5 px-3 py-1 cursor-pointer`}>L</span></div>
            <div onClick={() => setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL") : [...prev, "XL"])}><span className={`${sizes.includes("XL") ? "bg-tertiary text-white" : "bg-white"} text-gray-30 rounded ring-1 ring-slate-900/5 px-3 py-1 cursor-pointer`}>XL</span></div>
            <div onClick={() => setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev, "XXL"])}><span className={`${sizes.includes("XXL") ? "bg-tertiary text-white" : "bg-white"} text-gray-30 rounded ring-1 ring-slate-900/5 px-3 py-1 cursor-pointer`}>XXL</span></div>
          </div>
        </div>
        <div className='flex gap-2 pt-2'>
          <label htmlFor="image1">
            <img src={image1 ? URL.createObjectURL(image1) : upload_icon} alt="prdctImg" className='w-16 h-16 aspect-square object-cover ring-1 ring-slate-900/5 rounded-lg' />
            <input onChange={(e) => setImage1(e.target.files[0])} type="file" name='image' id='image1' hidden />
          </label>
          <label htmlFor="image2">
            <img src={image2 ? URL.createObjectURL(image2) : upload_icon} alt="prdctImg" className='w-16 h-16 aspect-square object-cover ring-1 ring-slate-900/5 rounded-lg' />
            <input onChange={(e) => setImage2(e.target.files[0])} type="file" name='image' id='image2' hidden />
          </label>
          <label htmlFor="image3">
            <img src={image3 ? URL.createObjectURL(image3) : upload_icon} alt="prdctImg" className='w-16 h-16 aspect-square object-cover ring-1 ring-slate-900/5 rounded-lg' />
            <input onChange={(e) => setImage3(e.target.files[0])} type="file" name='image' id='image3' hidden />
          </label>
          <label htmlFor="image4">
            <img src={image4 ? URL.createObjectURL(image4) : upload_icon} alt="prdctImg" className='w-16 h-16 aspect-square object-cover ring-1 ring-slate-900/5 rounded-lg' />
            <input onChange={(e) => setImage4(e.target.files[0])} type="file" name='image' id='image4' hidden />
          </label>
        </div>
        <div className='flexStart gap-2 my-2'>
          <input onChange={(e) => setPopular(prev => !prev)} type="checkbox" checked={popular} id='popular' />
          <label htmlFor="popular" className='cursor-pointer'>Add to popular</label>
        </div>
        <button type='submit' className='btn-dark mt-3 max-w-44 sm:w-full flex items-center justify-center gap-2'
        disabled={loading}
        >
          {loading && (
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 018-8v8z"></path>
            </svg>
          )}
          {loading ? 'Uploading...': 'Add Product'}
         </button>
      </form>
    </div>
  )
}

export default Add