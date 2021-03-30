import React, { useState } from "react"
import { login } from "../interations"

export const Login = ({handleLogin, history})=>{
    const [user,setUser]=useState({email:"",password:""})

    const handleSubmit = ()=>{
        const {email,password} =user
        login(email,password)
        .then((data)=>{
            const {user,token}=data;
            handleLogin(user,token)
            if(user.role === 1){
                history.push(`/admin/products`)
            }else{
                history.push(`/user/products`)
            }
            // console.log("token:::",data.token);
            // console.log("user::",data.user)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return(
        <div className="container-fluid">
            <form action="">
                <input 
                type="email" 
                name="email" 
                className="form-control" 
                placeholder="Enter Email"
                value = {user.email}
                required
                onChange={(e)=>{
                    setUser((usr)=>({...usr, email:e.target.value}))
                }}
                />

                <input 
                type="password" 
                name="password" 
                className="form-control" 
                placeholder="Enter Your password"
                value = {user.password}
                required
                onChange={(e)=>{
                    setUser((usr)=>({...usr, password:e.target.value}))
                }}
                />

                <button 
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
                >Login</button>

            </form>
        </div>
    )
}