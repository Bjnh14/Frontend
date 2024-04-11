import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import RoutesComponent from './Routes';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the database
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      // Replace this with your actual API call or database query
      const response = await fetch('/products');
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSearch = async (query) => {
    try {
      // Call the search products API from the backend
      const response = await fetch(`/?q=${query}`);
      const data = await response.json();
      setFilteredProducts(data);
    } catch (error) {
      console.error('Error searching products:', error);
    }
  };

  return (
    <>
      <Header onSearch={handleSearch} products={products} />
      <RoutesComponent filteredProducts={filteredProducts} />
      <Footer />
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;