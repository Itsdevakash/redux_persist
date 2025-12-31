import React, { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { setUser,removeUser } from "./redux/slices/loginslice";
import { toggleTheme } from "./redux/slices/themeslice";

const Login = ()=>{

  const {loginSlice, themeSlice} = useSelector((alldata)=>alldata)
    const dispatch = useDispatch()
    // const [dark,setDark] = useState(false)
  
    const [formvalue,setFormvalue] = useState({
      username:loginSlice ? loginSlice.username :'',
      password:loginSlice ? loginSlice.password :''
    })
  
    const handleInput = (e) =>{
  
      const input = e.target
      const name = input.name
      const value = input.value
      setFormvalue(prev =>({
        ...prev,
        [name]:value
      }))
  
    }
  
    const login = (e)=>{
     e.preventDefault()
     console.log(formvalue)
    } 
  
    const rememberMe = (e) =>{
  
      const checkbox = e.target
     
      if(checkbox.checked)
      {
        dispatch(setUser(formvalue))
      }else{
        dispatch(removeUser())
      }
  
    }

    // const darkMode = (e)=>{
    //   // const input = e.target
    //   // if(input.checked)
    //   // {
    //   // setDark(true)
    //   // }else{
    //   // setDark(false)
    //   }
    // }

    return (<div>
         <div className={`bg-rose-600 ${themeSlice?'dark':'light'}:bg-slate-900 flex items-center justify-center h-screen`}>
      <div className={`bg-white ${themeSlice?'dark':'light'}:bg-slate-800 rounded-lg shadow-lg p-6 w-[450px]`}>
          <form className="space-y-8" onSubmit={login}>
            <div className="flex flex-col">
              <label className={`font-medium text-lg mb-2 ${themeSlice?'dark':'light'}:text-white`}>Username</label>
              <input className={`border border-gray-300 ${themeSlice?'dark':'light'}:text-white rounded p-3`}
              type="email"
              placeholder="Username"
              name="username"
              required
              value={formvalue.username}
              onChange={handleInput}
              />
            </div>
             <div className="flex flex-col">
              <label className={`font-medium text-lg mb-2 ${themeSlice?'dark':'light'}:text-white`}>Password</label>
              <input className={`border border-gray-300 ${themeSlice?'dark':'light'}:text-white rounded p-3`}
              type="password"
              placeholder="*********"
              name="password"
              required
              value={formvalue.password}
              onChange={handleInput}
              />
            </div>

            <div className="flex gap-3 items-center">
              <input type="checkbox" onChange={rememberMe} checked={loginSlice ? true : false}/>
              <label className={`${themeSlice?'dark':'light'}:text-white`}>Remember Me!</label>
            </div>
            <button className="bg-indigo-600 p-3 px-8 rounded text-white">Login</button>
          </form>
          <div>
            <input type="checkbox" checked={themeSlice}  onChange={()=>dispatch(toggleTheme())}/>
            <label className={`${themeSlice?'dark':'light'}:text-white`}>Dark mode</label>
          </div>
      </div>
    </div>
    </div>)

}
export default Login