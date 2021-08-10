import React, {useState, useEffect} from 'react';
import NavBar from '../navbar/NavBar';
import { getProducts, selectProducts } from './ShopSlice';
import { useSelector, useDispatch } from 'react-redux';

import style from './Shop.module.css'


const ShopContainer = (props) => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    const products = useSelector(selectProducts)

    debugger
    return (
        
        <div className={style.shopContainer}>
            <NavBar></NavBar>
            <h1>Shop</h1>
            <h2>products</h2>

        </div>     
    );
}
 
export default ShopContainer;