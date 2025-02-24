import {ReactNode, InputHTMLAttributes} from 'react'


interface IProps extends InputHTMLAttributes<HTMLInputElement>{
    id:string;
    errorMsg?:string;
    className?:string;
    children:ReactNode;
}

const InputWrapper = ({id ,children, className, errorMsg, ...rest}:IProps) => {
    //handlers
    const onChange = () => {}

    return (
      <div className='flex flex-col my-2'>

          <label htmlFor={id}>
              {children}
          </label>

          <input className={`bg-transparent px-2 py-2 rounded-lg ${className} shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400`} id={id}  {...rest}/>
        <span className="text-sm text-red-500 font-semibold">{errorMsg}</span>
      </div>
    )
}

export default InputWrapper