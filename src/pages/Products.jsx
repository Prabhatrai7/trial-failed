import { useEffect, useState } from 'react';
import './Products.css';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [searchProduct, setSearchProduct] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
        const response = await fetch("https://trial-failed-default-rtdb.firebaseio.com/products.json")
        const responseData = await response.json();
        
        const productsList = [];

        for (const key in responseData) {
            productsList.push({
            id: key,
            name: responseData[key].name,
            desc: responseData[key].desc
            });
        }
        setProducts(productsList);
        }
        fetchProduct();
    }, [searchProduct]);

    const handleText = (event) => {
        setSearchProduct(event.target.value);
    }

    const filtered = products.filter(product => {
        return product.name.toLowerCase() === searchProduct.toLowerCase();
    });

    return (
        <div className='products-container' id='products'>
            <div className='heading-section'>
                <div className='header-start'>PROD<div className='header-end'>UCTS</div></div>
            </div>
            <div className='info'>What are you looking for?</div>
            <div className='search-container'>
                <input type='text' className='searchBar' placeholder='Search your medicine here.....' onChange={handleText} />
            </div>
            <div className='product-items'>
                    {
                        filtered.map((product, index) => {
                        return (
                            <div key={index}>
                                <div className='product-name'>Product Name: &nbsp; <div className='product-detail'>{product.name} </div></div>
                                <div className='product-desc'>Description: &nbsp; <div className='product-detail'>{product.desc} </div></div>
                            </div>
                        )
                        })
                    }
                </div>
        </div>
    );
}

export default Products;