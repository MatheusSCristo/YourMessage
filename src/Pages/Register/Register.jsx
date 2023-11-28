import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebase'
import { database } from '../../firebase/firebase'
import {useNavigate} from "react-router-dom"
import { get, push, ref } from 'firebase/database'

import * as S from "./stylesRegister"

const Register = () => {
  const navigate=useNavigate()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmPassword] = useState("")
  const [username, setUsername] = useState("")
  const [passError, setPassError] = useState(false)
  const [userExist,setUserExist]=useState(false)
  const [emailInUse,setEmailInUse]=useState(false)



  const ComparePasswords = (pass) => {
    setConfirmPassword(pass)
    if (password !== pass) {
      setPassError(true)
    }
    else {
      setPassError(false)
    }

  }

  const createUser = () => {
    const reference = ref(database, "/users")
    get(reference, "users").then((snapshot) => {
      if (snapshot.exists()) {
        const data = Object.values(snapshot.val())
        data.forEach((user) => {
          if (user.username === username) {
            setUserExist(true)
            return false;
          }
          if(user.email === email){ 
            setEmailInUse(true)
            return false;
          }
          
        });
        if (userExist || emailInUse) {
          console.log("exists")
          return; 
        }
      }
      createUserWithEmailAndPassword(auth, email, password)
      .then(()=>{
        push(reference, { email, firstName, lastName, username })
      })
      .then(()=>navigate("/"))
      .catch((err)=>console.log(err))
    })
  }


  const HandleSubmitForm = (e) => {
    e.preventDefault();
    if (!passError)
      createUser()
  }



  return (
    <S.Wrapper>
      <S.Welcome>Welcome to YourMessage</S.Welcome>
      <S.Box as={"form"} onSubmit={(e) => HandleSubmitForm(e)}>
        <S.Login>Create your account</S.Login>
        <S.NameBox style={{ display: "flex" }}>
          <S.Name placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          <S.Name placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </S.NameBox>
        <S.Input type='text' placeholder='Username' value={username} autoComplete='username'
          onChange={(e) =>{ setUsername(e.target.value);setUserExist(false)}} required minLength={3} maxLength={10} />
          {userExist && <S.PassError>Username already in use.</S.PassError>}
        <S.Input type="email" placeholder='Email' value={email} autoComplete='email'
          onChange={(e) =>{ setEmail(e.target.value);setEmailInUse(false)}} required />
          {emailInUse && <S.PassError>Email already in use, log in to your account.</S.PassError>}

        <S.Input type="password" placeholder='Password' value={password} autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)} required />

        <S.Input type="password" placeholder='Confirm your password' value={confirmpassword} autoComplete="new-password"
          onChange={(e) => ComparePasswords(e.target.value)} required />
        {passError && <S.PassError>Passwords do not match</S.PassError>}

        <S.Create>Create new account</S.Create>
      </S.Box>
    </S.Wrapper>
  )
}

export default Register