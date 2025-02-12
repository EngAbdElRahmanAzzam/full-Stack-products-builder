import {ReactNode , ButtonHTMLAttributes} from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode;
    className?:string;

}

const Button = ({children, className, ...rest}:IProps)=>{

    return(
        <>
            <button className={`py-1 rounded-lg ${className}`} {...rest}>{children}</button>
        </>
    )
}   

export default Button;
