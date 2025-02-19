import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../components/Assets/dropdown_icon.png';
import { Items } from '../components/Items/Items';  

export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext); 

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 24 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="Dropdown" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          //const mappedCategory = item.category === "men" ? "veg" : item.category === "women" ? "nonveg" : item.category;
          if (props.category === item.category) {
            return <Items 
              id={item.id} 
              name={item.name} 
              key={item.id || i} 
              new_price={item.new_price} 
              image={item.image} 
              old_price={item.old_price} 
            />
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};
