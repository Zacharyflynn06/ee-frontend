import style from './Shop.module.css'
import { NavLink } from 'react-router-dom'


export default function ProductCard(props) {

const formatImageUrl = () => {
    return props.product.attributes.image_format ? props.product.attributes.image_format.url : process.env.PUBLIC_URL + "logo192.png"
}

        return (
            <div className={style.productCard}> 
                <div >
                    <NavLink
                        to={`/shop/products/${props.product.id}`}
                        exact
                        key={props.product.id}    
                    >
                    <div className={style.productLink}>
                        <img className={style.productImage} src={formatImageUrl()} alt="" />
                        <span className={style.productName}>
                            {props.product.attributes.name}
                        </span>
                        <div className={style.productPrice}>
                            ${props.product.attributes.price}
                        </div>
                    </div>
                    </NavLink>
                </div>
            </div>
        )


}
