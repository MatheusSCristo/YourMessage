import React, { useContext, useEffect, useState } from 'react'
import { auth, database } from '../../firebase/firebase'
import { onValue, ref } from 'firebase/database'

import * as S from "./stylesFriends"
import { ChatContext } from '../../context/currentChat'

const Friends = () => {
    const [friends, setFriends] = useState([])
    const {currentChat, setCurrentChat } = useContext(ChatContext)
    const [lastMessage,setLastMessage]=useState([])


    const ListFriends = () => {
        const user=auth.currentUser
        if(user){
            const id=user.uid
                const reference = ref(database, `users/${id}/friends`)
                onValue(reference, (snapshot) => {
                    if (snapshot.exists()) {
                        const data = Object.values(snapshot.val())
                        setFriends(data)
                        data.map((friend,index)=>{
                            GetLastMessage(friend,index)
                        })
                    }
                })}
    }

    const CurrentChat = (user) => {
        setCurrentChat(user)
        }

    useEffect(() => {
        ListFriends()
    }, [])

    const GetLastMessage = (friend,index) => {
        let AllMessages = []
                const id = auth.currentUser.uid;
                const referenceSent = ref(database, `users/${id}/sent/${friend.id}`);
                const referenceReceived = ref(database, `users/${id}/received/${friend.id}`);
                onValue(referenceSent, (snapshot) => {
                    if (snapshot.exists()) {
                        const data = Object.values(snapshot.val());
                        data.map((message) => {
                            AllMessages.push(message)
                        })

                    }
                
                onValue(referenceReceived, (snapshot) => {
                    if (snapshot.exists()) {
                        const data = Object.values(snapshot.val());
                        data.map((message) => {
                           
                            AllMessages.push(message)
                        });
                    
                    
                    
                    }
                    AllMessages.sort((a, b) => a.date - b.date)
                    const newMessage=[lastMessage]
                    
                    newMessage[index]=(AllMessages[AllMessages.length-1])
                    if(newMessage)
                    setLastMessage(newMessage)
                
                })
                })
            }       
    

    return (
        <S.Wrapper>
            {friends.map((friend,index) => {
           
                return (
                    <S.Chat key={friend.id} onClick={() => CurrentChat(friend)}>
                        <S.UserImg src='./userImg.svg' />
                        <S.MessagePreview>
                            <S.Name>{friend.firstName}</S.Name>

                            {lastMessage!="" && <S.Message>{lastMessage[index].message}</S.Message>}
                        </S.MessagePreview>
                    </S.Chat>)
            }
            )}
        </S.Wrapper>
    )
}

export default Friends