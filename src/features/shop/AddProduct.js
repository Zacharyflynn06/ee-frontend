import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import style from './Shop.module.css'
import NavBar from '../navbar/NavBar'
import {addProduct} from './ShopSlice'
import { useHistory } from 'react-router'

const AddProduct = (props) => {

    const history = useHistory()
    const dispatch = useDispatch()



    const [productData, setProductData] = useState({
        name: "",
        price: "",
        description: ""
    })
    
    const imageFile = React.createRef()

    const handleSubmit = (event) => {
        
        event.preventDefault()
        const formData = new FormData(event.target)
        
        dispatch(addProduct(formData))
        history.push("/shop")
    }

    const handleChange = (event) => {
        setProductData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }
    return ( 
        <div className={style.shopContainer}>
            <NavBar></NavBar>
            <form className={style.newProductForm} onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="name" value={ productData.name} onChange={handleChange} />
                <input type="number" name="price" id="" placeholder="price" value={ productData.price} onChange={handleChange}/>
                <input type="text" name="description" id="" placeholder="description" value={ productData.description} onChange={handleChange}/>
                <input type="file" name="image" id="" ref={imageFile} />
                <input type="submit" value="Submit" onSubmit={handleSubmit} />
            </form>
        </div>
    );
}
 
export default AddProduct;