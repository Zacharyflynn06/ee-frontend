import React, {useState, useEffect} from 'react';
// import ErrorPage from './ErrorPage'
import NavBar from '../navbar/NavBar';
import { selectProducts } from './ShopSlice';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

import style from './Shop.module.css'

const ShopContainer = (props) => {

    const products = useSelector(selectProducts)

    return(

            <div className={style.shopContainer}>
                <NavBar></NavBar>
                <h1>Store</h1>
                <h2>Products</h2>
                <div className={style.productsContainer}>
                    {products.map(product => 
                        <ProductCard 
                            product={product} 
                            key={product.id}
                        />
                    )}
                        
                </div>
            </div>     
    )    

                
  
}
 
export default ShopContainer;