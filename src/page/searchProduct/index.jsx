import ProductsComponent from 'page/product/productComponent';
import {useLocation} from 'react-router-dom'
function SearchProduct() {
    const location = useLocation()
    console.log(location.state)
    return ( <>
        {location.state.length ? <ProductsComponent products={location.state } /> : "không tìm thấy sản phẩm" }

    </> );
}

export default SearchProduct;