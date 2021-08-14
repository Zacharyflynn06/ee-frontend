import React, {useState, useEffect} from 'react';
// import ErrorPage from './ErrorPage'
import NavBar from '../navbar/NavBar';
import { selectProducts, selectStatus } from './ShopSlice';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

import style from './Shop.module.css'

const ShopContainer = (props) => {

    const products = useSelector(selectProducts)
    const status = useSelector(selectStatus)

    if (status === "loading") {

        return (
            <div className={style.shopContainer}>
                <h1>Loading!</h1>
            </div>)
    } else {
        return(
    
                <div className={style.shopContainer}>
                    <NavBar></NavBar>
                    <h1>Shop</h1>
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

                
  
}
 
export default ShopContainer;