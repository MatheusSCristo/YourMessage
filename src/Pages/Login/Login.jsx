import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'

import * as S from "./stylesLogin"
import { auth } from '../../firebase/firebase'
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()
  
  const HandleLogin=()=>{
    signInWithEmailAndPassword(auth,email,password)
    .then(()=>{
      navigate("/")
      
    })
  }
  const HandleSubmit=(e)=>{
    e.preventDefault();
    HandleLogin()
  }


  return (
    <S.Wrapper>
        <S.Welcome>Welcome Back</S.Welcome>
        <S.Box as={"form"} onSubmit={(e)=>HandleSubmit(e)}>
            <S.Login>Log in to YourMessage</S.Login>
            <S.Input type="email" placeholder='Email'  value={email} autoComplete='email'
            onChange={(e)=>setEmail(e.target.value)} required/>
            <S.Input type="password" placeholder='Password'  value={password}  autoComplete="current-password"
            onChange={(e)=>setPassword(e.target.value)} required/>
            <S.SignIn>Sign-In</S.SignIn>
            <S.Forgot>Forgot your password?</S.Forgot>
            <S.Create onClick={()=>navigate("/register")}>Create new account</S.Create>
        </S.Box>
    </S.Wrapper>
  )
}

export default Login