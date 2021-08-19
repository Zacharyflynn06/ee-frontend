import React, {useEffect} from 'react'
import NavBar from '../navbar/NavBar';
import { NavLink, useParams } from 'react-router-dom';
import { shopSelector, getProducts } from './ShopSlice';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../loading/Loading';
import style from './Shop.module.css'
import { userSelector } from '../User/userSlice';



const ShowProduct = () => {
    
    const {admin} = useSelector(userSelector)
    const params = useParams()
    const {status, products} = useSelector(shopSelector)
    
    if (status === "loading" ) {
        
        return ( <Loading />)

    } else if (status === "complete"){
        
        const product = products.find(product => product.id === params.id)
        
        const formatImageUrl = () => {
            return product.attributes.image_format ? product.attributes.image_format.url : process.env.PUBLIC_URL + "logo192.png"
        }

        const checkAdmin = () => {
        
            if (admin) {
                return (
                    <div>
                        <NavLink
                            to={`/shop/products/${params.id}/edit`}
                            exact
                    >
                    <input type="button" value="Edit Product" />
                    </NavLink>
    
                    </div>
                )
            }    
        }

        return (

            <div className={style.shopContainer}>
                
                < div className={style.showProductCard}>
                    <div className={style.showProductImageContainer}>
                        <img className={style.showProductImage} src={formatImageUrl()} alt="" />
                    </div>
                    <div className={style.showProductDetails}>
                        <div>
                            <h2> {product.attributes.name}</h2>
                            <span>
                                ${product.attributes.price}
                            </span>
                            <div>
                                {product.attributes.description}
                            </div>
                            
                        </div>
                    </div>

                </div>
                    {checkAdmin()}
                

            </div>
        )

    }


}
 
export default ShowProduct;

