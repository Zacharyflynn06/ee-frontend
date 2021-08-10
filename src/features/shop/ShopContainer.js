import React, {useState, useEffect} from 'react';
import NavBar from '../navbar/NavBar';
import { getProducts, selectProducts } from './ShopSlice';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from './ProductCard';

import style from './Shop.module.css'


const ShopContainer = (props) => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    const products = useSelector(selectProducts)

    
    return (
        
        <div className={style.shopContainer}>
            <NavBar></NavBar>
            <h1>Store</h1>
            <h2>Products</h2>
            <div className={style.productsContainer}>
                {products.map((product, i) => <ProductCard product={product.attributes} key={i}></ProductCard>)}
            </div>

        </div>     
    );
}
 
export default ShopContainer;