import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { checkAuth, userSelector, clearLogoutUserStatus } from './userSlice'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { useHistory } from 'react-router'
import { useLocation } from 'react-router-dom'

function WithAuth(WrappedComponent) {

    const Wrapper = () => {
        const location = useLocation()
        const dispatch = useDispatch()
        const {loggedIn, logoutUserStatus, message} = useSelector(userSelector)
        const history = useHistory()

        const notLoggedIn = () => {
            // toast.error("You need to log in to view this page")
            history.push('/login')
        }

        useEffect(() => {
            if (logoutUserStatus === "rejected") {
                toast.error(message)
                dispatch(clearLogoutUserStatus)
            }
    
            if (logoutUserStatus === "complete") {
                toast.success('Logged Out')
                dispatch(clearLogoutUserStatus())
                history.push('/')
            }
        }, [logoutUserStatus, dispatch, message, history])

        useEffect(()=> {
            dispatch(checkAuth())
        }, [dispatch])
        
        if (!loggedIn && location.pathname === '/dashboard') {
            
            return (
                <>
                    {notLoggedIn()}
                </>
            )
        } else {
            return <WrappedComponent />
        }
        
    }
    return (Wrapper)
}
 
export default WithAuth;