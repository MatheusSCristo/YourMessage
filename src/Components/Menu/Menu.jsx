import React from 'react'
import * as S from "./stylesMenu"

const Menu = () => {
    return (
        <S.Wrapper>
            <S.Box>
                <S.TopWrapper>
                    <div style={{ display: "flex", alignItems: 'center' }}>
                        <S.UserImage src='./userImg.svg' />
                        <div style={{ marginLeft: "20px" }}>
                            <S.Name>Matheus Senas</S.Name>
                            <S.User>@mtxx</S.User>
                        </div>
                    </div>
                    <S.UserImage src='./userAdd.svg' />
                </S.TopWrapper>

                <S.MessageBox>
                    <S.Message>Messages</S.Message>
                    <S.Container>
                        <S.SearchImg src='./search.svg'/>
                        <S.Search placeholder='Search Chats'/> 
                    </S.Container>

                </S.MessageBox>

            </S.Box>



        </S.Wrapper>
    )
}

export default Menu