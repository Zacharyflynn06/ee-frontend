import React from 'react';
import NavBar from '../navbar/NavBar';

import style from './Shop.module.css'
const StoreContainer = (props) => {
    return (
        <div className={style.shopContainer}>
            <NavBar></NavBar>
            <h1>Shop</h1>
        </div>     
    );
}
 
export default StoreContainer;