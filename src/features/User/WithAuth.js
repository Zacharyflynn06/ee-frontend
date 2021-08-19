import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { checkAuth, userSelector } from './userSlice'
import Login from './Login'
import { useDispatch } from 'react-redux'
import Loading from '../loading/Loading'
import toast from 'react-hot-toast'


function WithAuth(WrappedComponent) {

    const Wrapper = () => {

        const dispatch = useDispatch()
        const {authChecked, loggedIn} = useSelector(userSelector)
        // const history = useHistory()

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