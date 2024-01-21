import React, { useEffect, useState } from 'react'
import * as S from "./stylesSearch"
import ReactLoading from 'react-loading';

const Search = ({
    setSearchActive,
    users,
    AddFriend }) => {

    const [friendSearch, setFriendSearch] = useState("")
    const [loading, setLoading] = useState(true)
    let userExists = false


    useEffect(()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    },[friendSearch])
    return (
        <S.AddBox>
            <S.SearchBoxConfig>
                <S.SearchAdd type='text' value={friendSearch} onChange={(e) => setFriendSearch(e.target.value)} placeholder='Find your friends' />
                <S.Close onClick={() => setSearchActive(false)}>X</S.Close>
            </S.SearchBoxConfig>
            {friendSearch == "" && <S.Connect>Connect with people</S.Connect>}
            {
                loading && !friendSearch == "" &&
                <ReactLoading type='spin' color='black' height={30} width={30} />

            }


            {users.map((user) => {
                if (user.username.toUpperCase().includes(friendSearch.toUpperCase()) && friendSearch !== "" && !loading) {
                    userExists = true;
                    return (
                        <S.SearchWrapper key={user.uid}>
                            <S.SearchNameBox>
                                <S.SearchName>{user.firstName[0].toUpperCase() + user.firstName.slice(1)}</S.SearchName>
                                <S.SearchUserName>{user.username}</S.SearchUserName>
                            </S.SearchNameBox>
                            <img src='./plus.svg' onClick={() => { AddFriend(user); setSearchActive(false) }} />
                        </S.SearchWrapper>
                    )
                }
            }
            )}
            {!userExists && friendSearch !== "" && !loading &&
                <S.NotFound>User not found!</S.NotFound>
            }

        </S.AddBox>
    )
}

export default Search