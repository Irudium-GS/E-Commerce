import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import { Items } from '../Items/Items';

export const RelatedProducts = () => {
  return (
    <div className='relatedProducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedProduct-item">
            {data_product.map((item, i)=>(
                <Items 
                            key={item.id || i} 
                            id={item.id} 
                            name={item.name} 
                            image={item.image} 
                            new_price={item.new_price} 
                            old_price={item.old_price} 
                        />
            ))}
        </div>
    </div>
  )
}
