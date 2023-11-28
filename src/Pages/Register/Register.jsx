import React, { useState } from 'react'
import * as S from "./stylesRegister"

const Register = () => {

  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirmpassword,setConfirmPassword]=useState("")
  const [username,setUsername]=useState("")
  const [passError,setPassError]=useState(false)



const ComparePasswords=(pass)=>{
  setConfirmPassword(pass)
  if(password!==pass){
    setPassError(true)
  }
  else  {
    setPassError(false)
  }
  
}

const HandleSubmitForm=(e)=>{
  e.preventDefault();
}



  return (
    <S.Wrapper>
        <S.Welcome>Welcome to YourMessage</S.Welcome>
        <S.Box as={"form"} onSubmit={(e)=>HandleSubmitForm(e)}>
            <S.Login>Create your account</S.Login>
            <S.NameBox style={{display:"flex"}}>
            <S.Name placeholder='First Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)} required/>
            <S.Name placeholder='Last Name'  value={lastName} onChange={(e)=>setLastName(e.target.value)} required/>
            </S.NameBox>
            <S.Input type='username' placeholder='Username'  value={username}
             onChange={(e)=>setUsername(e.target.value)} required minLength={3} maxLength={10}/>

            <S.Input type="email" placeholder='Email'  value={email} 
            onChange={(e)=>setEmail(e.target.value)} required/>

            <S.Input type="password" placeholder='Password'  value={password}  autocomplete="new-password"
            onChange={(e)=>setPassword(e.target.value)} required/>

            <S.Input type="password" placeholder='Confirm your password'  value={confirmpassword} 
            onChange={(e)=>ComparePasswords(e.target.value)} required/>
            {passError && <S.PassError>Passwords do not match</S.PassError>}

            <S.Create>Create new account</S.Create>
        </S.Box>
    </S.Wrapper>
  )
}

export default Register