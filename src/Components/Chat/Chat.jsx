import React from 'react'
import * as S from "./stylesChat"
import Messages  from "../Messages/Messages"

const Chat = () => {
  return (
    <S.Wrapper>
        <S.TopBar>
            <S.Container>
                <S.UserImage src='./userImg.svg'/>
                <S.User>Sarah</S.User>
            </S.Container>
            <S.Dots src='./dotsVertical.svg'/>
        </S.TopBar>
        <Messages/>
    </S.Wrapper>
  )
}

export default Chat