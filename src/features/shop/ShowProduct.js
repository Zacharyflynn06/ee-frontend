import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { shopSelector } from './ShopSlice';
import { useSelector } from 'react-redux';
import Loading from '../loading/Loading';
import style from './Shop.module.css'
import { userSelector } from '../User/userSlice';
import Error from '../error/Error'
import toast from 'react-hot-toast';

const ShowProduct = () => {
    
    const {admin} = useSelector(userSelector)
    const params = useParams()
    const {getProductsStatus, products} = useSelector(shopSelector)
    
    const productObj = products.find(productObj => productObj.id === params.id)

    if(getProductsStatus === 'rejected' || !productObj) {
        toast.error('there was a problem')
        return(<Error />)

    } else if (getProductsStatus === "loading" ) {
        
        return ( <Loading />)

    } else if (getProductsStatus === "complete"){
        
        
        const formatImageUrl = () => {
            return productObj.attributes.image_format ? productObj.attributes.image_format.url : process.env.PUBLIC_URL + "logo192.png"
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
                            <h2> {productObj.attributes.name}</h2>
                            <span>
                                ${productObj.attributes.price}
                            </span>
                            <div>
                                {productObj.attributes.description}
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

