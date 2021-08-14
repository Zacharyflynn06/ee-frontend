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

    const formatImageUrl = () => {
        return product.attributes.image_format ? product.attributes.image_format.url : process.env.PUBLIC_URL + "logo192.png"
    }

    if (status === "loading") {

        return (
            <div className={style.shopContainer}>
                <h1>Loading!</h1>
            </div>)
    } else {
        return (

            <div className={style.shopContainer}>
                <NavBar />

                <div className={style.showProductContainer}>
                <h2>Name: {product.attributes.name}</h2>

                    <div className={style.showProductImageContainer}>
                        <img className={style.showProductImage} src={formatImageUrl()} alt="" />
                    </div>

                    <div className={style.showProductDetails}>
                        <div>

                            <span>
                                ${product.attributes.price}
                            </span>

                            <div>
                                {product.attributes.description}
                            </div>
                            
                        </div>
                    </div>
                </div>
                
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

