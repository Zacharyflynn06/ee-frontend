import React from 'react'
import style from './Shop.module.css'

export default function ProductCard(props) {
    
    return (
        <div>
           <h3>{props.product.name}</h3>
           <h5>{props.product.description}</h5>
           <h5>${props.product.price}</h5>
        </div>
    )
}
