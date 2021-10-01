// import React, { useState } from 'react'


import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import Loading from '../loading/Loading';
import { shopSelector } from './ShopSlice';
import { userSelector } from '../User/userSlice';

import style from './Shop.module.css'
import Menu from '../menu/Menu';

const ShopContainer = () => {
    const {admin} = useSelector(userSelector)
    const products = useSelector(shopSelector).products
    const {getProductsStatus} = useSelector(shopSelector)

    
    if (getProductsStatus === 'loading') {
        
        return ( <Loading /> )

    } else if (getProductsStatus === 'complete') {

        const checkAdmin = () => {
            if (admin) {
                return (
                    <div>
                        <NavLink
                            to={'/shop/products/new'}
                        >
                        <input type="button" value="Add Product"/>  
                        </NavLink>
    
                    </div>
                )
            }    
        }

         
        return(
            
            <div className={style.shopContainer}>
                <Menu />
                <h1>Shop</h1>
                <div className={style.productsContainer}>
                    {products.map(product => 
                        <ProductCard 
                            product={product} 
                            key={product.id}   
                        />
                    )}
                </div>
                {checkAdmin()}
            </div>     
        )    
    }

         
  
}
 
export default ShopContainer;