// src/App.js
//import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart.js';
import Payment from './components/Payment.js';
import PaymentConfirmed from './components/Confirm.js';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<ShoppingCart />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/confirm" element={<PaymentConfirmed />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
