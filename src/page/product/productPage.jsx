import { getProducts } from 'api/productsApi';
import ProductsComponent from 'page/product/productComponent';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// function ProductsPage() {
//     const [products, setProducts] = useState([])
//     useEffect(() => {
//         getProducts().then((res) => {
//             setProducts(res.data)
//         })
//     },[])
//     return ( 
//         <>
//             <ProductsComponent products={products} /> 
//         </> 
//     );
// }

function ProductsPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((res) => {
            setProducts(res.data);
        });
    }, []);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q');

    const filteredProducts = query
        ? products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))
        : products;

    return (
        <>
            <ProductsComponent products={filteredProducts} />
        </>
  );
}

export default ProductsPage;