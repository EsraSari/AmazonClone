import React from 'react'
import product from "../../assets/images/product1.jpg"
import product2 from "../../assets/images/product2.jpg"

const ProductComponent = () => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
      
      <div className='bg-white border border-gray-200 shadow rounded-md'>
        <div className='p-5'>
          <p className='text-xl font-bold'>Deals in PCs</p>
        </div>
        <button className='flex flex-col h-full'>
          <img 
            className='py-4 px-8 rounded-t-lg mx-auto object-cover' 
            src={product} 
            alt='product_name'
          />
          <div className='px-5 pb-5'>
              <p className='text-amazon_product_text'>Shop Now</p>
          </div>
        </button>
      </div>
      
      <div className="bg-white border border-gray-200 shadow rounded-md p-5">
        <div>
          <p className="text-xl font-bold">Refresh your space</p>
        </div>
        <button>
          <div className="grid grid-cols-2 gap-4 p-1">
            <div>
              <img
                className="w-full object-cover"
                src={product}
                alt="product1"
              />
              <p className='text-xs text-left'>Dining</p>
            </div>
            <div>
              <img
                className="w-full object-cover"
                src={product2}
                alt="product2"
              />
              <p className='text-xs text-left'>Home</p>
            </div>
            <div>
              <img
                className="w-full object-cover"
                src={product2}
                alt="product3"
              />
              <p className='text-xs text-left'>Kitchen</p>
            </div>
            <div>
              <img
                className="w-full object-cover"
                src={product2}
                alt="product4"
              />
              <p className='text-xs text-left'>Health and Beauty</p>
            </div>
          </div>
          <div className='mt-3'>
            <p className='text-amazon_product_text text-left'>Shop Now</p>
          </div>
        </button>
      </div>
      
      <div className='bg-white border border-gray-200 shadow rounded-md'>
        <div className='p-5'>
          <p className='text-xl font-bold'>Deals in PCs</p>
        </div>
        <button className='flex flex-col h-full'>
          <img 
            className='py-4 px-8 rounded-t-lg mx-auto object-cover' 
            src={product} 
            alt='product_name'
          />
          <div className='px-5 pb-5'>
              <p className='text-amazon_product_text'>Shop Now</p>
          </div>
        </button>
      </div>

      <div className="bg-white border border-gray-200 shadow rounded-md p-5">
        <div>
          <p className="text-xl font-bold">Refresh your space</p>
        </div>
        <button>
          <div className="grid grid-cols-2 gap-4 p-1">
            <div>
              <img
                className="w-full object-cover"
                src={product}
                alt="product1"
              />
              <p className='text-xs text-left'>Dining</p>
            </div>
            <div>
              <img
                className="w-full object-cover"
                src={product2}
                alt="product2"
              />
              <p className='text-xs text-left'>Home</p>
            </div>
            <div>
              <img
                className="w-full object-cover"
                src={product2}
                alt="product3"
              />
              <p className='text-xs text-left'>Kitchen</p>
            </div>
            <div>
              <img
                className="w-full object-cover"
                src={product2}
                alt="product4"
              />
              <p className='text-xs text-left'>Health and Beauty</p>
            </div>
          </div>
          <div className='mt-3'>
            <p className='text-amazon_product_text text-left'>Shop Now</p>
          </div>
        </button>
      </div>

      <div className='bg-white border border-gray-200 shadow rounded-md'>
        <div className='p-5'>
          <p className='text-xl font-bold'>Deals in PCs</p>
        </div>
        <button className='flex flex-col h-full'>
          <img 
            className='py-4 px-8 rounded-t-lg mx-auto object-cover' 
            src={product} 
            alt='product_name'
          />
          <div className='px-5 pb-5'>
              <p className='text-amazon_product_text'>Shop Now</p>
          </div>
        </button>
      </div>
     
     <div className="bg-white border border-gray-200 shadow rounded-md p-5">
        <div>
          <p className="text-xl font-bold">Refresh your space</p>
        </div>
        <button>
          <div className="grid grid-cols-2 gap-4 p-1">
            <div>
              <img
                className="w-full object-cover"
                src={product}
                alt="product1"
              />
              <p className='text-xs text-left'>Dining</p>
            </div>
            <div>
              <img
                className="w-full object-cover"
                src={product2}
                alt="product2"
              />
              <p className='text-xs text-left'>Home</p>
            </div>
            <div>
              <img
                className="w-full object-cover"
                src={product2}
                alt="product3"
              />
              <p className='text-xs text-left'>Kitchen</p>
            </div>
            <div>
              <img
                className="w-full object-cover"
                src={product2}
                alt="product4"
              />
              <p className='text-xs text-left'>Health and Beauty</p>
            </div>
          </div>
          <div className='mt-3'>
            <p className='text-amazon_product_text text-left'>Shop Now</p>
          </div>
        </button>
      </div>
      
      <div className="bg-white border border-gray-200 shadow rounded-md p-5 ">
        <p className="text-xl font-bold">Refresh your space</p>
        <button>
            <div>
              <img
                className="object-cover"
                src={product}
                alt="product1"
              />
              <p className='text-xs text-left'>Dining</p>
            </div>
            <div className='grid grid-cols-3 gap-4'>
              <div>
                <img
                  className="w-full object-cover"
                  src={product2}
                  alt="product2"
                />
                <p className='text-xs text-left'>Home</p>
              </div>
              <div>
                <img
                  className="w-full object-cover"
                  src={product2}
                  alt="product3"
                />
                <p className='text-xs text-left'>Kitchen</p>
              </div>
              <div>
                <img
                  className="w-full object-cover"
                  src={product2}
                  alt="product4"
                />
                <p className='text-xs text-left'>Health and Beauty</p>
              </div>
            </div>
          <div>
              <p className='text-amazon_product_text text-left'>Shop Now</p>
          </div>
        </button>
      </div>

      <div className='bg-white border border-gray-200 shadow rounded-md'>
        <div className='p-5'>
          <p className='text-xl font-bold'>Deals in PCs</p>
        </div>
        <button className='flex flex-col h-full'>
          <img 
            className='py-4 px-8 rounded-t-lg mx-auto object-cover' 
            src={product} 
            alt='product_name'
          />
          <div className='px-5 pb-5'>
              <p className='text-amazon_product_text'>Shop Now</p>
          </div>
        </button>
      </div>

    </div>
  )
}

export default ProductComponent
