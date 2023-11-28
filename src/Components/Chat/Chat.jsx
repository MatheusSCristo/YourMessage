import React, { useState } from 'react'
import * as S from "./stylesChat"
import Messages  from "../Messages/Messages"
import {auth} from "../../firebase/firebase"
import {useNavigate} from "react-router-dom"


const Chat = () => {
  const [configActive,setConfigActive]=useState(false)
  const navigate=useNavigate()

  const Logout=()=>{
    auth.signOut()
    .then(()=>{
      navigate("/login")
    })

  }

  return (
    <S.Wrapper>
        <S.TopBar>
          {configActive && <S.ConfigBox>
              <S.Clear>Clear chat</S.Clear>
              <S.Clear onClick={Logout}>Disconnect</S.Clear>
            </S.ConfigBox>}
            <S.Container>
                <S.UserImage src='./userImg.svg'/>
                <S.User>Sarah</S.User>
            </S.Container>
            <S.Dots src='/dotsVertical.svg' onClick={()=>setConfigActive(!configActive)}/>
        </S.TopBar>
        <Messages/>
        <S.SendContainer>
          <S.Write/>
          <S.SendImg src={"./planeSend.svg"}/>
        </S.SendContainer>

    </S.Wrapper>
  )
}

export default Chat