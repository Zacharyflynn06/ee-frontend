import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { checkAuth, userSelector, clearLogoutUserStatus } from './userSlice'
import Login from './Login'
import { useDispatch } from 'react-redux'
import Loading from '../loading/Loading'
import toast from 'react-hot-toast'
import { useHistory } from 'react-router'

function WithAuth(WrappedComponent) {

    const Wrapper = () => {

        const dispatch = useDispatch()
        const {authChecked, loggedIn, logoutUserStatus, message} = useSelector(userSelector)
        const history = useHistory()

        useEffect(() => {
            if (logoutUserStatus === "rejected") {
                toast.error(message)
                dispatch(clearLogoutUserStatus)
            }
    
            if (logoutUserStatus === "complete") {
                debugger
                toast.success('Logged Out')
                dispatch(clearLogoutUserStatus())
                history.push('/')
            }
        }, [logoutUserStatus, dispatch, message, history])

        useEffect(()=> {
            dispatch(checkAuth())
        }, [dispatch])
    
        if (!authChecked) {
            return(
                <p>You are not authorized to view this page</p>
            )
        } else if (!loggedIn) {
            return (
                <div>
                    
                    <Login />
                    <p>You need to login to view this page.</p>
                </div>
            )
        } else {
            return <WrappedComponent />
        }
        
    }
    return (Wrapper)
}
 
export default WithAuth;