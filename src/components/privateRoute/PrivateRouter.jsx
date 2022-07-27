import { useLayoutEffect, useState } from 'react';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import {AuthorizationStatus} from '../const'

export const PrivateRouter = ({ authorizationStatus, children }) => {
    const [key, setKey] = useState(false)

//    useLayoutEffect(() => {
//     setKey(localStorage.getItem('token'))
//     console.log(localStorage.getItem('token'))
//     console.log(key)
//    },[]) 
//    console.log(localStorage.getItem('token'))
    useLayoutEffect(()=> {
    if(localStorage.getItem('token')) {
        setKey(true)
       }
   },[])
 

    return(
        authorizationStatus === key
        ? children
        : <Navigate to='/signin'/>
    )
} 