import React from 'react';
// import ErrorPage from './ErrorPage'
import { shopSelector } from './ShopSlice';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import Loading from '../loading/Loading';


import style from './Shop.module.css'

const ShopContainer = () => {
    
   
    const products = useSelector(shopSelector).products
    const {status} = useSelector(shopSelector)
    
    if (status === 'loading') {
        
        return ( <Loading /> )

    } else if (status === 'complete'){
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