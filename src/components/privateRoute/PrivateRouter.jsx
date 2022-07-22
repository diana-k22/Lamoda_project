import { Navigate } from 'react-router-dom';
import {AuthorizationStatus} from '../const'

export const PrivateRouter = ({ authorizationStatus, children }) => {

    return(
        authorizationStatus === AuthorizationStatus.Auth
        ? children
        : <Navigate to='/signin'/>
    )
} 