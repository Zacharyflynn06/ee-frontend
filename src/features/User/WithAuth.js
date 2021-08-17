import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { checkAuth, userSelector } from './userSlice'
import Login from './Login'
import { useDispatch } from 'react-redux'
import Loading from '../loading/Loading'


const WithAuth = (WrappedComponent) => {

    const dispatch = useDispatch()

    const {authChecked, loggedIn} = useSelector(userSelector)

    useEffect(() => {
        return () => {
            dispatch(checkAuth)
        }
    }, [dispatch])

    if (!authChecked) {
        return <Loading />
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
 
export default WithAuth;