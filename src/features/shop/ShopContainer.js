import React, {useState, useEffect} from 'react';
import NavBar from '../navbar/NavBar';
import { getProducts } from './ShopSlice';
import { useDispatch } from 'react-redux';

import style from './Shop.module.css'
const ShopContainer = (props) => {

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    
    return (
        
        <div className={style.shopContainer}>
            <NavBar></NavBar>
            <h1>Shop</h1>
        </div>     
    );
}
 
export default ShopContainer;