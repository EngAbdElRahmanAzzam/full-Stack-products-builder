import {ReactNode, InputHTMLAttributes} from 'react'


interface IProps extends InputHTMLAttributes<HTMLInputElement>{
    id:string;
    type:string;
    errorMsg:string;
    className?:string;
    children:ReactNode;
}

const InputWrapper = ({id, type ,children, className, errorMsg, ...rest}:IProps) => {

  return (
    <div className='flex flex-col my-2'>

        <label htmlFor={id}>
            {children}
        </label>

        <input className={`bg-neutral-800 px-2 py-2 rounded-lg ${className} shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400`} id={id} type={type} {...rest}/>
      <span className="text-sm text-red-500 font-semibold">{errorMsg}</span>
    </div>
  )
}

export default InputWrapper