import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { checkAuth, userSelector, clearLogoutUserStatus } from './userSlice'
import Login from './Login'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { useHistory } from 'react-router'

function AdminAuth(WrappedComponent) { 

    const Wrapper = () => {
        const dispatch = useDispatch()
        const {authChecked, loggedIn, admin} = useSelector(userSelector)
        const history = useHistory()

        const notAuthorized = () => {
            toast.error("You are not authorized to view this page")
            history.push('/')
        }

        useEffect(()=> {
            dispatch(checkAuth())
        }, [dispatch])

        if (admin && authChecked && loggedIn) {
                return <WrappedComponent />
        } else if (!loggedIn) {
            return (
                <div>
                    <Login />
                    <p>You need to login to view this page.</p>
                </div>
            )
        } else {
            return(
                <>
                    {notAuthorized()}
                </>
            )
            
        }
        
    }
    return (Wrapper)
}
export default AdminAuth;
