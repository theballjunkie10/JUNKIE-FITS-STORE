import React, { useContext, useEffect, useState } from 'react'
import ShowSearch from '../components/ShowSearch'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/Item'
import Footer from '../components/Footer'

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext)
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relevant')
  const [filteredProducts, setFilteredProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const toggleFilter = (value, setState) => {
    setState((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value])
  }

  const applyFilter = () => {
    let filtered = [...products]

    if (search && showSearch) {
      filtered = filtered.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length) {
      filtered = filtered.filter((product) => category.includes(product.category))
    }

    if (subCategory.length) {
      filtered = filtered.filter((product) => subCategory.includes(product.subCategory))
    }

    return filtered
  }

  const applySorting = (productsList) => {
    switch (sortType) {
      case "low":
        return productsList.sort((a, b) => a.price - b.price);
      case "high":
        return productsList.sort((a, b) => b.price - a.price);
      default:
        return productsList
    }
  }

  useEffect(() => {
    let filtered = applyFilter()
    let sorted = applySorting(filtered)
    setFilteredProducts(sorted)
    setCurrentPage(1)  
  }, [category, subCategory, sortType, products, search, showSearch])

  const getPaginatedProducts = () => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return filteredProducts.slice(startIndex, endIndex)
  }

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)

  return (
    <div className='max-padd-container !px-0'>
      <div className='flex flex-col sm:flex-row gap-8 mb-16'>
 
        <div className='min-w-72 bg-primary p-4 pt-8 pl-6 lg:pl-12 rounded-r-xl'>
          <ShowSearch />
          <div className='pl-5 py-3 mt-4 bg-white rounded-xl'>
            <h5 className='h5 mb-4'>Categories</h5>
            <div className='flex flex-col gap-2 text-sm font-light'>
              {["Men", "Women", "Kids"].map((cat) => (
                <label key={cat} className='flex gap-2 medium-14 text-gray-30'>
                  <input
                    onChange={(e) => toggleFilter(e.target.value, setCategory)}
                    type="checkbox" value={cat} className='w-3' />
                  {cat}
                </label>
              ))}
            </div>
          </div>
          <div className='pl-5 py-3 mt-6 bg-white rounded-xl'>
            <h5 className='h5 mb-4'>Types</h5>
            <div className='flex flex-col gap-2 text-sm font-light'>
              {["Topwear", "Bottomwear", "Winterwear"].map((subCat) => (
                <label key={subCat} className='flex gap-2 medium-14 text-gray-30'>
                  <input
                    onChange={(e) => toggleFilter(e.target.value, setSubCategory)}
                    type="checkbox" value={subCat} className='w-3' />
                  {subCat}
                </label>
              ))}
            </div>
          </div>
          <div className='px-4 py-3 mt-6 bg-white rounded-xl'>
            <h5 className='h5 mb-4'>Sort By</h5>
            <select onChange={(e) => setSortType(e.target.value)}
              className='border border-slate-900/5 outline-none text-gray-30 medium-14 h-8 w-full rounded px-2'>
              <option value="relevant">Relevant</option>
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
      
        <div className='bg-primary p-4 rounded-l-xl'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6'>
            {getPaginatedProducts().length > 0 ? (
              getPaginatedProducts().map((product) => (
                <Item key={product._id} product={product} />
              ))
              
            ) : (
              <p className='capitalize'>No products found for selected filters.</p>
            )}
          </div>
  
          <div className='flexCenter flex-wrap gap-4 mt-14 mb-10'>
            <button disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)}
              className={`${currentPage === 1 && "opacity-50 cursor-not-allowed"} btn-secondary !py-1 !px-3`}
            >Previous</button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button key={index + 1} onClick={() => setCurrentPage(index + 1)}
                className={`${currentPage === index + 1 && "!bg-tertiary text-white"} btn-light !py-1 !px-3`}
              >
                {index + 1}
              </button>
            ))}
            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage((prev) => prev + 1)}
              className={`${currentPage === totalPages && "opacity-50 cursor-not-allowed"} btn-secondary !py-1 !px-3`}
            >Next</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Collection