import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import ProductList from './pages/productlist';
import CartPage from './features/cart/cartpage';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
