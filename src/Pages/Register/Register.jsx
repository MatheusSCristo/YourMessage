import React from 'react'
import * as S from "./stylesRegister"

const Register = () => {
  return (
    <S.Wrapper>
        <S.Welcome>Welcome to YourMessage</S.Welcome>
        <S.Box as={"form"}>
            <S.Login>Create your account</S.Login>
            <S.NameBox style={{display:"flex"}}>
            <S.Name placeholder='First Name'/>
            <S.Name placeholder='Last Name'/>
            </S.NameBox>
            <S.Input type='text' placeholder='Username'/>
            <S.Input type="email" placeholder='Email'/>
            <S.Input type="password" placeholder='Password'/>
            <S.Input type="password" placeholder='Confirm your password'/>
            <S.Create>Create new account</S.Create>
        </S.Box>
    </S.Wrapper>
  )
}

export default Register