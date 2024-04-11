import { Route, Routes } from 'react-router-dom';
import HomePage from 'page/home';
import AboutUsPage from 'page/aboutUs';
import ContactPage from 'page/Contact';
import ProductsPage from 'page/product/productPage'; // Assuming you have a separate page for rendering products
import SearchProduct from 'page/searchProduct';
import ProductsComponent from 'page/product/productComponent';

const RoutesComponent = ({ filteredProducts }) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/aboutUs" element={<AboutUsPage />} />
      <Route
        path="/products"
        element={<ProductsPage />}
      />
      <Route
        path="/products/search"
        element={<SearchProduct/>}
      />
    </Routes>
  );
};

export default RoutesComponent;