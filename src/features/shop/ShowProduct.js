// import { NavLink, useParams } from 'react-router-dom';
// import { shopSelector } from './ShopSlice';
// import { useSelector } from 'react-redux';
// import Loading from '../loading/Loading';
// import style from './Shop.module.css'
// import { userSelector } from '../User/userSlice';
// import Error from '../error/Error'

// const ShowProduct = () => {

//     const {getProductsStatus, products} = useSelector(shopSelector)
//     const {admin} = useSelector(userSelector)
//     const params = useParams()
//     const productObj = products.find(productObj => productObj.id === params.id)



//     const checkAdmin = () => {
        
//         if (admin) {
//             return (
//                 <div>
//                     <NavLink
//                         to={`/shop/products/${params.id}/edit`}
//                         exact
//                 >
//                 <input type="button" value="Edit Product" />
//                 </NavLink>

//                 </div>
//             )
//         }    
//     }

//     if(getProductsStatus === 'rejected' ) {

//         return(<Error message={'there was a problem loading the request'}/>)

//     } else if (getProductsStatus === "complete" && !productObj) {

//         return(<Error message={'The product you are trying to view does not exist'}/>)

//     } else if (getProductsStatus === "loading" ) {
        
//         return ( <Loading />)

//     } else if (getProductsStatus === "complete"){
        
//         const {
//             name,
//             price,
//             description
//         } = productObj.attributes
        
//         const formatImageUrl = () => {
//             return productObj.attributes.image_format ? productObj.attributes.image_format.url : process.env.PUBLIC_URL + "logo192.png"
//         }

//         return (

//             <div className={style.shopContainer}>
//                 <h1>Shop</h1>
//                 <div className={style.showProductContainer}>
//                     < div className={style.showProductCard}>
//                         <div className={style.showProductImageContainer}>
//                             <img className={style.showProductImage} src={formatImageUrl()} alt="" />
//                         </div>
//                         <div className={style.showProductDetails}>
//                             <div className={style.showProductName}>
//                                 {name}
//                             </div>
//                             <div className={style.showProductDescription}>
//                                 <p>{description}</p>
//                             </div>
//                             <div className={style.showProductPrice}>
//                                 ${price}
                                
//                             </div>
                            
//                         </div>
//                     </div>
//                     <NavLink to="/shop" exact >
//                         <input type="button" value="Back to Products"/> 
//                     </NavLink>
//                     {checkAdmin()}

//                 </div>

//             </div>
//         )

//     }


// }
 
// export default ShowProduct;

