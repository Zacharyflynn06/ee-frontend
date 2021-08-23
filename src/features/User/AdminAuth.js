import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { checkAuth, userSelector } from './userSlice'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { useHistory } from 'react-router'

function AdminAuth(WrappedComponent) { 

    const Wrapper = () => {
        const dispatch = useDispatch()
        const {authChecked, loggedIn, admin} = useSelector(userSelector)
        const history = useHistory()

        useEffect(()=> {
            dispatch(checkAuth())
        }, [dispatch])

        if (admin && authChecked && loggedIn) {
                return <WrappedComponent />
        } else {
            return(
                <>
                    <h1>You are not Authorized</h1>
                </>
            )
            
        }
        
    }
    return (Wrapper)
}
export default AdminAuth;
