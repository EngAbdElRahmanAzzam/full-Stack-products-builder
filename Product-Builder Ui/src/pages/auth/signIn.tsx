import { ChangeEvent, useState } from "react"
import Loader from "../../compontents/common/loader"

const SignInPage = () => {
    //states
    const [email, setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");

    //handlers
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
      
    }
    return (
      <div className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
          <section className="flex w-[30rem] flex-col space-y-10">
              <div className="text-center text-4xl font-medium">Wellcome <span className={`text-indigo-600`}>ADMIN</span></div>

              <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                  <input type="text" placeholder="Email"
                    value={email} 
                    onChange={onChangeHandler} 
                    className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
              </div>

              <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                  <input type="password" placeholder="Password"
                    value={password}
                    onChange={onChangeHandler} 
                    className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
              </div>

              <button className="rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"><Loader/></button>
          </section>
      </div>
    )
  }
  
  export default SignInPage