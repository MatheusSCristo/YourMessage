import React, { useContext } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'

import * as S from "./stylesLogin"
import { auth } from '../../firebase/firebase'
import { useNavigate } from "react-router-dom"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from "zod"

const Login = () => {
  
  const navigate = useNavigate()

  const checkCredentials = async (data) => {
    try{
      await signInWithEmailAndPassword(auth, data.email, data.password)
    }
    catch(error){
      return true
    }
  }
  

  const createUserFormSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z.string().min(1,"Password is required")
  }).refine(async (data) =>
  {
    const invalidCredentials=await checkCredentials(data);
    return !invalidCredentials

  }, {
    path: ["password"],
    message: "Invalid email or password"
  })


  const { register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(createUserFormSchema)
  })

  const HandleLogin = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        navigate("/")

      })
  }

  return (
    <S.Wrapper>
      <S.Welcome>Welcome Back</S.Welcome>
      <S.Box as={"form"} onSubmit={handleSubmit(HandleLogin)}>
        <S.Login>Log in to YourMessage</S.Login>
        <S.Input
          type='string'
          placeholder='Email'
          autoComplete='email'
          {...register("email")}
        />
        {errors.email && <S.PassError>{errors.email.message}</S.PassError>}


        <S.Input
          type="password"
          placeholder='Password'
          autoComplete="current-password"
          {...register("password")}
        />
        {errors.password && <S.PassError>{errors.password.message}</S.PassError>}
        <S.SignIn>Sign-In</S.SignIn>
        <S.Forgot>Forgot your password?</S.Forgot>
        <S.Create onClick={() => navigate("/register")}>Create new account</S.Create>
      </S.Box>
    </S.Wrapper>
  )
}

export default Login