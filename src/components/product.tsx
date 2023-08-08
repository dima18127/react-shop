// import React from 'react'
import { useState } from 'react';
import { Iproduct } from '../models'
 
interface ProductProps {
    product: Iproduct
}


const Product = ({product}:ProductProps) => {

const [details, SetDetails] = useState(false) 
const bgClassBtn = details ? 'bg-blue-400' : 'bg-yellow-400';
let btnClasses = ['border', 'py-2', 'px-2', bgClassBtn];

console.log(product);
  return (
    <div className="card border py-2 px-4 rounded flex flex-col items-center mb-2">
        <img src={product.image} className='w-1/6' alt={product.title} />
      <p>{product.title}</p>
      <button className={btnClasses.join(' ')} onClick={()=>SetDetails(!details)}>
        {details ? 'hide': "show"}
      </button>
      {details && <p>{product.description}</p>}
    </div>
  )
}

export default Product
