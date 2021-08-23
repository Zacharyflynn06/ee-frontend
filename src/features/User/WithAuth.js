import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { checkAuth, userSelector, clearLogoutUserStatus } from './userSlice'
import Login from './Login'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { useHistory } from 'react-router'

function WithAuth(WrappedComponent) {

    const Wrapper = () => {

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
        
        if (!loggedIn) {
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