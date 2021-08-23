import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import {
    addProduct, 
    updateProduct, 
    deleteProduct, 
    shopSelector,
    clearAddProductStatus,
    clearUpdateProductStatus,
    clearDeleteProductStatus
} from './ShopSlice'
import { useHistory } from 'react-router'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import style from './Shop.module.css'

const ProductForm = (props) => {

    const history = useHistory()
    const params = useParams()
    const dispatch = useDispatch()
    const { 
        addProductStatus, 
        updateProductStatus, 
        deleteProductStatus, 
        products, 
        message 
    } = useSelector(shopSelector)

    const productId = params.id
    const productObj = products.find(product => product.id === params.id)
    
    const [productData, setProductData] = useState({
        name: "",
        price: "",
        description: ""
    })
    
    useEffect(() => {
        if (productObj) {
            setProductData({
                name: productObj.attributes.name || "",
                description: productObj.attributes.description || "",
                price: productObj.attributes.price || ""
    
            })
        }
    }, [productObj])
    
    const imageFile = React.createRef()

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        
        if(productObj) {
            dispatch(updateProduct({data: formData, id: productObj.id}))
            history.push(`/shop/products/${productObj.id}`)

        } else {
            dispatch(addProduct(formData))
            history.push("/shop")
        }
            
    }

    const handleChange = (event) => {
        setProductData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const handleDelete = () => {
        if(productObj) {
            dispatch(deleteProduct(productObj))
            history.push('/shop')
        }
    }

    useEffect(() => {
        
        if (addProductStatus === "rejected" ) {
            debugger
            message.forEach(err => toast.error(err))
            dispatch(clearAddProductStatus())
        }

        if (addProductStatus === "complete") {
            
            toast.success('Successfully added new product')
            dispatch(clearAddProductStatus())
            history.push('/shop')
        }

        if (updateProductStatus === "rejected") {

            message.forEach(err => toast.error(err))
            dispatch(clearUpdateProductStatus())
        }

        if (updateProductStatus === "complete") {
            
            toast.success('Successfully updated product')
            dispatch(clearUpdateProductStatus())
            history.push('/shop')
        }

        if (deleteProductStatus === "rejected") {
            toast.error('there was a problem! try again')
            dispatch(clearDeleteProductStatus())
        }

        if (deleteProductStatus === "complete") {
            toast.success('Successfully deleted product')
            dispatch(clearDeleteProductStatus())
            history.push('/shop')
        }

    
    }, [addProductStatus, updateProductStatus, deleteProductStatus, dispatch, history, message])

    const conditionallyDisplaySubmit = () => {
        if(productObj) {
            return "Update Product"
        } else {
            return "Add Product"
        }
    }

    const conditionallyDisplayDelete = () => {
        if (productObj) {
            return(
                <input type="button" value="Delete Event" onClick={handleDelete} />
            )
        }
    }

    return ( 
        
        <div className={style.shopContainer}>

            <h1>Product Form</h1>
            <div className={style.productFormContainer}>

                <form className={style.productForm} onSubmit={handleSubmit}>
                    <div>
                        
                        <input type="text" name="name" placeholder="name" value={ productData.name} onChange={handleChange} />
                    </div>
                    <div>
                        <input type="currency" name="price" min="0.00" max="200.00" placeholder="price" value={ productData.price} onChange={handleChange}/>
                    </div>
                    <div>
                        <textarea type="text" name="description" id="" placeholder="description" value={ productData.description} onChange={handleChange}/>
                    </div>
                    <div>
                        
                        <input type="file" name="image" id="" ref={imageFile} />
                    </div>
                    
                    <input type="submit" value={conditionallyDisplaySubmit()}/>
                </form>
                    {conditionallyDisplayDelete()}

            </div>
        </div>
    );
}
 
export default ProductForm;