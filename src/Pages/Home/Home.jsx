import React from 'react'
import Menu from '../../Components/Menu/Menu'
import Chat from '../../Components/Chat/Chat'
import * as S from "./stylesHome"

const Home = () => {
  return (
    <S.Wrapper>
      <Menu />
      <Chat />
    </S.Wrapper>
  )
}

export default Home