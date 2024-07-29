import React from 'react'
import product from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
function ProductSlider() {
  return (
    <div className='bg-white'>
      <div className='p-5'>
          <p className='text-xl font-bold'>Best Sellers in Clothing, Shoes & Jewelry</p>
      </div>
      <div className="overflow-x-auto whitespace-nowrap bg-white">
      <div className="inline-block p-4 w-48">
        <img src={product} alt="Item 1" />
      </div>
      <div className="inline-block p-4 w-48">
        <img src={product2} alt="Item 2"/>
      </div>
      <div className="inline-block p-4 w-48">
        <img src={product} alt="Item 3"/>
      </div>
      <div className="inline-block p-4 w-48">
        <img src={product2} alt="Item 4"/>
      </div>
      <div className="inline-block p-4 w-48">
        <img src={product} alt="Item 5"/>
      </div>
      <div className="inline-block p-4 w-48">
        <img src={product2} alt="Item 6"/>
      </div>
      <div className="inline-block p-4 w-48">
        <img src={product} alt="Item 7"/>
      </div>
      <div className="inline-block p-4 w-48">
        <img src={product2} alt="Item 8"/>
      </div>
      <div className="inline-block p-4 w-48">
        <img src={product} alt="Item 9"/>
      </div>
      <div className="inline-block p-4 w-48">
        <img src={product2} alt="Item 10"/>
      </div>
      <div className="inline-block p-4 w-48">
        <img src={product} alt="Item 11"/>
      </div>
      <div className="inline-block p-4 w-48">
        <img src={product2} alt="Item 12"/>
      </div>
      </div>
    </div>
    
  )
}

export default ProductSlider