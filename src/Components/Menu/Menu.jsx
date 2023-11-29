import React, { useEffect, useState, useSyncExternalStore } from 'react'
import * as S from "./stylesMenu"
import { onValue, push, ref, set } from 'firebase/database'
import { auth, database } from '../../firebase/firebase'
import Friends from '../Friends/Friends'

const Menu = () => {
    const [searchActive, setSearchActive] = useState(false)
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")
    const [userLogged, setUserLogged] = useState()

    const GetUserLogin = () => {
        const user = auth.currentUser
        if (user) {
            const id = user.uid
            const reference = ref(database, `users/${id}`)
            onValue(reference, (snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.val()
                    setUserLogged(data)
                }
            })
        }
    }



    const ListUsers = () => {
        const reference = ref(database, "users")
        onValue(reference, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val()
                setUsers(Object.values(data))
            }
        })
    }

    useEffect(() => {
        ListUsers()
        GetUserLogin()
    }, [])

    const AddFriend = (user) => {
        const id = auth.currentUser.uid
        const reference = ref(database, `users/${id}/friends/${user.id}`)
        set(reference, { username: user.username, firstName: user.firstName, id: user.id })
        const reference2 = ref(database, `users/${id}`)
        onValue(reference2, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val()
                const reference = ref(database, `users/${user.id}/friends/${id}`)
                set(reference, { username: data.username, firstName: data.firstName, id: data.id })
            }
        })
    }
    return (
        <S.Wrapper>

            <S.Box>
                <S.TopWrapper>
                    {searchActive &&
                        <S.AddBox>
                            <S.SearchAdd type='text' value={search} onChange={(e) => setSearch(e.target.value)} />

                            {users.map((user) => {
                                if (user.username === `@${search}`)
                                    return (
                                        <div key={user.uid}>
                                            <h1>{user.firstName}</h1>
                                            <h1>{user.username}</h1>
                                            <img src='./plus.svg' onClick={() => AddFriend(user)} />
                                        </div>
                                    )
                            }


                            )}


                        </S.AddBox>}
                    <div style={{ display: "flex", alignItems: 'center' }}>
                        <S.UserImage src='./userImg.svg' />
                        <div style={{ marginLeft: "20px" }}>
                            {userLogged &&
                                <>
                                    <S.Name>{userLogged.firstName}</S.Name>
                                    <S.User>{userLogged.username}</S.User>
                                </>
                            }
                        </div>
                    </div>
                    <S.UserImage src='./userAdd.svg' onClick={() => setSearchActive(!searchActive)} />
                </S.TopWrapper>

                <S.MessageBox>
                    <S.Message>Messages</S.Message>
                    <S.Container>
                        <S.SearchImg src='./search.svg' />
                        <S.Search placeholder='Search Chats' />
                    </S.Container>

                    <Friends />
                </S.MessageBox>
            </S.Box>



        </S.Wrapper>
    )
}

export default Menu