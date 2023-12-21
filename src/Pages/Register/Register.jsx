import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebase'
import { database } from '../../firebase/firebase'
import { useNavigate } from "react-router-dom"
import { get, push, ref, set } from 'firebase/database'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import * as S from "./stylesRegister"

const Register = () => {
  const navigate = useNavigate()
  const [VemailInUse, setEmailInUse] = useState(false)
  const [VusernameInUse, setUsernameInUse] = useState(false)


  const emailInUse = (info) => {
    setEmailInUse(false)
    const reference = ref(database, "/users/")
    get(reference, "users")
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = Object.values(snapshot.val())
          data.forEach((user) => {
            if (user.email === info.email) {
              setEmailInUse(true)
            }
          })

        }
      })
    return VemailInUse
  }

  const usernameInUse = (info) => {
    setUsernameInUse(false)
    const reference = ref(database, "/users/")
    get(reference, "users").then((snapshot) => {
      if (snapshot.exists()) {
        const data = Object.values(snapshot.val())
        data.forEach((user) => {
          if (user.username === `@${info.username}`) {
            setUsernameInUse(true)
          }
        })
      }
    })
    return VusernameInUse
  }

  const createUserFormSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    username: z.string().min(3, "Username needs at least 3 characters").max(6, "Username can't have more than 6 characters"),
    password: z.string().min(6, "Password needs to be at least 6 characters"),
    confirmPassword: z.string().min(6, "Password needs to be at least 6 characters")
  }).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Passwords don't match"

  }).refine((data) => !emailInUse(data), {
    path: ['email'],
    message: "Email address already registered, log in to your account to use YourMessage"
  }).refine((data) => !usernameInUse(data), {
    path: ['username'],
    message: "Username already in use"
  })

  const { register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(createUserFormSchema)
  })


  const createUser = (info) => {
    createUserWithEmailAndPassword(auth, info.email, info.password)
      .then(() => {
        const user = auth.currentUser
        const reference = ref(database, `/users/${user.uid}`);
        set(reference, {
          email: info.email,
          firstName: info.firstName,
          lastName: info.lastName,
          username: `@${info.username}`,
          id: user.uid
        })
      })
      .then(() => navigate("/"))
      .catch((err) => console.log(err))
  }

  return (
    <S.Wrapper>
      <S.Welcome>Welcome to YourMessage</S.Welcome>
      <S.Box as={"form"} onSubmit={handleSubmit(createUser)}>
        <S.Login>Create your account</S.Login>
        <S.NameBox style={{ display: "flex" }}>

          <S.InputBox>
            <S.Name
              placeholder='First Name'
              {...register("firstName")} />
            {errors.firstName && <S.PassError>{errors.firstName.message}</S.PassError>}
          </S.InputBox>
          <S.InputBox>
            <S.Name placeholder='Last Name'
              {...register("lastName")} />
            {errors.lastName && <S.PassError>{errors.lastName.message}</S.PassError>}
          </S.InputBox>
        </S.NameBox>
        <S.InputBox>

          <S.Input type='text'
            placeholder='Username'
            autoComplete='username'
            onChange={() => { setUserExist(false) }}
            {...register("username")} />
          {errors.username && <S.PassError>{errors.username.message}</S.PassError>}
        </S.InputBox>


        <S.InputBox>
          <S.Input type="string"
            placeholder='Email'
            autoComplete='email'
            onChange={() => { setEmailInUse(false) }}
            {...register("email")} />
          {errors.email && <S.PassError>{errors.email.message}</S.PassError>}
        </S.InputBox>

        <S.Input
          type="password"
          placeholder='Password'
          autoComplete="new-password"
          {...register("password")} />
        {errors.password && <S.PassError>{errors.password.message}</S.PassError>}


        <S.Input
          type="password"
          placeholder='Confirm your password'
          autoComplete="new-password"
          {...register("confirmPassword")} />
        {errors.confirmPassword && <S.PassError>{errors.confirmPassword.message}</S.PassError>}

        <S.Create>Create new account</S.Create>
      </S.Box>
    </S.Wrapper>
  )
}

export default Register