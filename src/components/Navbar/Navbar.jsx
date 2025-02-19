import React, { useContext, useState } from 'react';
import './Navbar.css';

import logo from '../Assets/logo.gif';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext); 

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img style={{ width: '60px', height: '60px' }} src={logo} alt="logo" />
            <p>SPICY-Pi</p>
        </div>

        <ul className="nav-menu">
          <li onClick={() => setMenu("shop")}> <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("veg")}> <Link style={{ textDecoration: 'none' }} to='/veg'>Veg</Link>
            {menu === "veg" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("nonveg")}> <Link style={{ textDecoration: 'none' }} to='/nonveg'>Non Veg</Link>
            {menu === "nonveg" ? <hr /> : <></>}
          </li>
        </ul>

        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/Cart'><img src={cart_icon} alt="cart_icon" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar;
