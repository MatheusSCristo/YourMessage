import React, { useContext, useState } from 'react'
import { auth, database } from "../../firebase/firebase"
import { useNavigate } from "react-router-dom"

import Messages from "../Messages/Messages"

import * as S from "./stylesChat"
import { push, ref, set } from 'firebase/database'
import { ChatContext } from '../../context/currentChat'

const Chat = () => {
  const [configActive, setConfigActive] = useState(false)
  const navigate = useNavigate()
  const [message, setMessage] = useState("")
  const { currentChat } = useContext(ChatContext)



  const HandleClearChat = () => {
    const user = auth.currentUser
    if (user) {
      const id = user.uid;
      const referenceSent = ref(database, `users/${id}/sent/${currentChat.id}`);
      const referenceReceived = ref(database, `users/${id}/received/${currentChat.id}`);
      set(referenceReceived, {})
      set(referenceSent, {})
    }

  }


  const HandleSendMessage = () => {
    if(message !==""){
    const id = auth.currentUser.uid
    const referenceSent = ref(database, `users/${id}/sent/${currentChat.id}`)
    const referenceReceived = ref(database, `users/${currentChat.id}/received/${id}`)
    const date = new Date().getTime()
    push(referenceSent, {
      date,
      message,
      id,
    })
    push(referenceReceived, {
      date,
      message,
      id,
    })

    setMessage("")}
  }


  const Logout = () => {
    auth.signOut()
      .then(() => {
        navigate("/login")
      })

  }
  
  return (
    <S.Wrapper>
      {currentChat &&
        <>
          <S.TopBar>
            {configActive && <S.ConfigBox>
              <S.Clear onClick={HandleClearChat}>Clear chat</S.Clear>
              <S.Clear onClick={Logout}>Disconnect</S.Clear>
            </S.ConfigBox>}

            <S.Container>
              <S.UserImage src={currentChat.img} />
              {currentChat && <S.User>{currentChat.firstName}</S.User>}
            </S.Container>
            <S.Dots src='./dotsVertical.svg' onClick={() => setConfigActive(!configActive)} />
          </S.TopBar>
          <Messages />
          <S.SendContainer as={"form"} onSubmit={HandleSendMessage}>
            <S.Write type='text' value={message} onChange={(e) => setMessage(e.target.value)} />
            <S.SendImg type='submit' />
          </S.SendContainer>
        </>
      }
      {!currentChat && 
        <S.NoChat>
          <S.NoChatBox>
            <S.NoChatText>Start talking with your friends</S.NoChatText>
          </S.NoChatBox>
        </S.NoChat>
      
      }

    </S.Wrapper>
  )
}

export default Chat