import React from 'react'
import NavBar from '../navbar/NavBar';
import { NavLink, useParams } from 'react-router-dom';
import { selectProducts, selectStatus } from './ShopSlice';
import { useSelector } from 'react-redux';

import style from './Shop.module.css'

const ShowProduct = () => {

    const params = useParams()
    const status = useSelector(selectStatus)
    const products = useSelector(selectProducts)
    const product = products.find(product => product.id === params.id)

    if (status === "loading") {

        return (
            <div className={style.shopContainer}>
                <h1>Loading!</h1>
            </div>)
    } else {
        return (

            <div className={style.shopContainer}>
                <NavBar />
                <h1>show product</h1>
                <h2>Name: {product.attributes.name}</h2>
                <NavLink
                    to={{
                        pathname: `/shop/products/${product.id}/edit`,
                    }}
                    exact
                >
                    <button>edit</button>
                </NavLink>
            </div>
        )

    }


}
 
export default ShowProduct;

