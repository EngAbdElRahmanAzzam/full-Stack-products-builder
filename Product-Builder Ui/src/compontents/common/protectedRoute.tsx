import {ReactNode} from 'react'
import { Navigate } from 'react-router-dom';

interface IProps{
    isAllowed:boolean;
    redirect:string;
    children:ReactNode
}

const ProtectedRoute = ({isAllowed, redirect , children}:IProps)=>{
    if(isAllowed)
        return children
    return <Navigate to={redirect}/>
}

export default ProtectedRoute