import React from 'react';
import './ShoppingCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


import image1 from './tshirt1.png'
import image2 from './cap.png'
import image3 from './bag.png'
import heroImage from './hero.jpg'

const ShoppingCart = () => {
    const bodyItems = [
      { title: 'Item 1', icon: faShoppingCart, text: 'Official Westpac Hackathon Tshirt', price: 10, image: image1 },
      { title: 'Item 2', icon: faShoppingCart, text: 'Official Westpac Hackathon Cap', price: 15, image: image2 },
      { title: 'Item 3', icon: faShoppingCart, text: 'Official Westpac Hackathon Tote Bag ', price: 20, image: image3 },
    ];
  
    const total = bodyItems.reduce((sum, item) => sum + item.price, 0);
  
    return (
      <div className="main">
        <div className="hero" style={{ backgroundImage: `url(${heroImage})`}}>
          <h2>Welcome to your shopping cart!</h2>
          <p>
            Here you can review your selected items and proceed to payment.
          </p>
        </div>
  
        <div className="cart">
          <h2>Your Cart</h2>
          <div className="cart-items">
            {bodyItems.map(({ title, icon, text, price, image }) => (
              <div key={title} className="cart-item">
                <img src={image} alt={title} className="cart-item-image" />
                <FontAwesomeIcon icon={icon} className="cart-item-icon" />
                <div className="cart-item-details">
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <p>${price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total: ${total}</h3>
            <Link to="/payment" className="checkout-button">Proceed to Payment</Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default ShoppingCart;
  