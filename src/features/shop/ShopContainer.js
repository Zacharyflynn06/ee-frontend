import React, {useState, useEffect} from 'react';
// import ErrorPage from './ErrorPage'
import NavBar from '../navbar/NavBar';
import { clearState, shopSelector } from './ShopSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import Loading from '../loading/Loading';


import style from './Shop.module.css'

const ShopContainer = () => {
    
    const dispatch = useDispatch()
    const products = useSelector(shopSelector).products
    const {isSuccess, isFetching, isError} = useSelector(shopSelector)

    useEffect(() => {
        return(
            dispatch(clearState()),
            console.log('shop is success', isSuccess)
        )
    }, [dispatch, isSuccess]);
    
    if (isFetching) {
        
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