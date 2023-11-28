import React from 'react'
import * as S from "./stylesLogin"

const Login = () => {
  return (
    <S.Wrapper>
        <S.Welcome>Welcome Back</S.Welcome>
        <S.Box as={"form"}>
            <S.Login>Log in to YourMessage</S.Login>
            <S.Input type="email" placeholder='Email'/>
            <S.Input type="current-password" placeholder='Password'/>
            <S.SignIn>Sign-In</S.SignIn>
            <S.Forgot>Forgot your password?</S.Forgot>
            <S.Create>Create new account</S.Create>
        </S.Box>
    </S.Wrapper>
  )
}

export default Login