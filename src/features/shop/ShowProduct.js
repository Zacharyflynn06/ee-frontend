import React from 'react'
import NavBar from '../navbar/NavBar';
import { useSelector } from 'react-redux';
import { selectProducts } from './ShopSlice';
import { NavLink } from 'react-router-dom';

import style from './Shop.module.css'

const ProductShow = (props) => {
    
    const products = useSelector(selectProducts)
    // console.log(products)
    
    const findProductById = (id) => {
        return products.find(product => product.id === id)
    }

    const product = findProductById(props.match.params.id)
    
    
    return ( 
        <div className={style.shopContainer}>
            <NavBar></NavBar>
            <h1>Show Product</h1>
            {/* <img src={product.attributes.image_format.url} alt="" /> */}
            <h2>{product.attributes.name}</h2>
            <p>{product.attributes.description}</p>
            <h3>{product.attributes.price}</h3>

            <div>
                <NavLink
                    to={{
                        pathname: `/shop/products/${product.id}/edit`,
                        product: product
                    }}
                    exact
                    key={product.id}
                >Edit</NavLink>
            </div>
        </div>
     );
}
 
export default ProductShow;

