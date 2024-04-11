import { getProducts } from 'api/productsApi';
import ProductsComponent from 'page/product/productComponent';
import { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom'
function ProductsPage() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts().then((res) => {
            setProducts(res.data)
        })
    },[])
    return ( <>
        <ProductsComponent products={products} /> 

    </> );
}

export default ProductsPage;