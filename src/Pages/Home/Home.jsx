import React, { useContext, useEffect } from 'react'
import { auth } from '../../firebase/firebase'
import Menu from '../../Components/Menu/Menu'
import Chat from '../../Components/Chat/Chat'
import * as S from "./stylesHome"
import { useNavigate } from "react-router-dom"


const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (!user) {
        navigate("/login")
      }
    })
  }, [])

  return (

    <S.Wrapper>
      <Menu />
      <Chat />
    </S.Wrapper>
  )
}

export default Home