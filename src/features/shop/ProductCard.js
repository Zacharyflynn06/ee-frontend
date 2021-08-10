import React from 'react'
import style from './Shop.module.css'

export default function ProductCard(props) {
    
    return (
        <div className={style.productCard}>
           <h4>{props.product.name}</h4>
           <h6>{props.product.description}</h6>
           <h6>${props.product.price}</h6>
        </div>
    )
}
