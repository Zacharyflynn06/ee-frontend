import React, {useState, useEffect} from 'react';
// import ErrorPage from './ErrorPage'
import NavBar from '../navbar/NavBar';
import { selectProducts, selectStatus } from './ShopSlice';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import Loading from '../loading/Loading';

import style from './Shop.module.css'

const ShopContainer = () => {

    const products = useSelector(selectProducts)
    const status = useSelector(selectStatus)

    if (status === "loading") {

        return (
            <Loading />
        )

    } else {
        return(
    
                <div className={style.shopContainer}>
                    {/* <NavBar></NavBar> */}
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