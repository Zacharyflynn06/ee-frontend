import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { checkAuth, userSelector } from './userSlice'
import Login from './Login'
import { useDispatch } from 'react-redux'
import Loading from '../loading/Loading'
import toast from 'react-hot-toast'
import { useHistory } from 'react-router'
import ErrorPage from '../error/Error'
function WithAuth(WrappedComponent) {

    const dispatch = useDispatch()
    const {authChecked, loggedIn} = useSelector(userSelector)
    const history = useHistory()

    useEffect(()=> {
        dispatch(checkAuth())
    }, [])
    
    class Wrapper extends React.Component {
        
        render() {
            
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
    }

    return (Wrapper)
}
 
export default WithAuth;