import React, { useState } from 'react'
import './Login.css'

import { MdEmail, MdLock } from "react-icons/md"
import { HiEye, HiEyeOff } from "react-icons/hi"

function Login() {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [show, setShow] = useState(false)

   const handleClick = (e) => {
      e.preventDefault()
      setShow(!show);
   }

   return (
      <div className="login">
         
         <div className="login-right">
            <h1> Sign in!</h1>

            <div className="login-loginInputEmail">
               <MdEmail />
               <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               />
            </div>

            <div className="login-loginInputPassword">
               <MdLock />
               <input
                  placeholder="Password"
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
               />
               <div className="login-eye">
                  {show ? (
                     <HiEye
                        size={20}
                        onClick={handleClick}
                     />
                  ) : (
                        <HiEyeOff
                           size={20}
                           onClick={handleClick}
                        />
                     )}
               </div>
            </div>

            <button type="submit">
            Enter
            </button>

            <h4>Não tenho conta!</h4>

            <p type="submit">
               Register!
            </p>
         </div>
      </div>
   )
}
export default Login;
