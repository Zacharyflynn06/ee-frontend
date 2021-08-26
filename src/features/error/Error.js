import React, {useEffect} from 'react'
import toast from 'react-hot-toast';
import style from './Error.module.css'

const Error = (props) => {


    useEffect(() => {
        if(props.message) {
            toast.error(props.message)
        } else {
            toast.error("the page you are trying to view doesn't exist!")
        }
    }, [props.message])

    return ( 
        <div className={style.errorPage}>
            <h1>Error Page</h1>
        </div>
     );
}
 
export default Error;