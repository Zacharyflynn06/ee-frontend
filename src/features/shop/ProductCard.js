import React from 'react'
import style from './Shop.module.css'
import { NavLink, Route } from 'react-router-dom'


export default function ProductCard(props) {



        return (
            <div className={style.productCard}>
            <NavLink
                to={`shop/products/${props.product.id}`}
                exact
                key={props.product.id}    
            >
            <h3>{props.product.attributes.name}</h3>
            </NavLink>
               <h6>{props.product.attributes.description}</h6>
               <h6>${props.product.attributes.price}</h6>
            </div>
        )


}
