import { Route, Routes } from 'react-router-dom'
import HomePage from 'page/home'
import AboutUsPage from 'page/aboutUs'
import ContactPage from 'page/contact'
import ProductsPage from 'page/product/productPage'; // Assuming you have a separate page for rendering products
import SearchProduct from 'page/searchProduct';
import LoginPage from 'page/login';
const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/aboutUs" element={<AboutUsPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/search" element={<SearchProduct/>} />
      <Route path="/auth/log-in" element={<LoginPage/>} />

    </Routes>
  )
}

export default RoutesComponent
