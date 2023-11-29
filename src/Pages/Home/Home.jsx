import React, { useEffect } from 'react'
import Menu from '../../Components/Menu/Menu'
import Chat from '../../Components/Chat/Chat'
import * as S from "./stylesHome"
import { auth } from '../../firebase/firebase'
import {useNavigate} from "react-router-dom"


const Home = () => {
  const navigate=useNavigate()
  useEffect(()=>{
    const user=auth.currentUser
      if(!user){
        navigate("/login")
      }
    })
    




  return (
    
    <S.Wrapper>
      <Menu />
      <Chat />
    </S.Wrapper>
  )
}

export default Home