import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import style from './Shop.module.css'
import NavBar from '../navbar/NavBar'
import {addProduct, updateProduct, deleteProduct, selectProducts} from './ShopSlice'
import { useHistory } from 'react-router'
import { useParams } from 'react-router-dom'

const ProductForm = (props) => {

    const history = useHistory()
    const dispatch = useDispatch()
    const params = useParams()

    const products = useSelector(selectProducts)
    const product = products.find(product => product.id === params.id)
    
    const [productData, setProductData] = useState({
        name: "",
        price: "",
        description: ""
    })
    
    useEffect(() => {
        if (product) {
            setProductData({
                name: product.attributes.name || "",
                description: product.attributes.description || "",
                price: product.attributes.price || ""
    
            })
        }
    }, [product])
    
    const imageFile = React.createRef()

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        
        if(product) {
            dispatch(updateProduct({data: formData, id: product.id}))
            history.push(`/shop/products/${product.id}`)

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
        if(product) {
            dispatch(deleteProduct(product))
            history.push('/shop')
        }
    }


    return ( 
        
        <div className={style.shopContainer}>
            <NavBar></NavBar>
            <form className={style.productForm} onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="name" value={ productData.name} onChange={handleChange} />
                <input type="number" name="price" id="" placeholder="price" value={ productData.price} onChange={handleChange}/>
                <textarea type="text" name="description" id="" placeholder="description" value={ productData.description} onChange={handleChange}/>
                <input type="file" name="image" id="" ref={imageFile} />
                <input type="submit" value="Submit"/>
            </form>
                <input type="button" value="Delete" onClick={handleDelete} />
        </div>
    );
}
 
export default ProductForm;