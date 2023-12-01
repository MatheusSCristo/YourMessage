import React, { useContext, useEffect, useState } from 'react'
import { auth, database, storage } from '../../firebase/firebase'
import { onValue, ref } from 'firebase/database'

import * as S from "./stylesFriends"
import { ChatContext } from '../../context/currentChat'
import { getDownloadURL, ref as refStorage } from 'firebase/storage'

const Friends = ({ search }) => {
    const [friends, setFriends] = useState([])
    const { setCurrentChat } = useContext(ChatContext)
    const [lastMessage, setLastMessage] = useState([])
    const [friendsImages, setFriendsImages] = useState([])


    const ListFriends = () => {
        const user = auth.currentUser
        if (user) {
            const id = user.uid
            const reference = ref(database, `users/${id}/friends`)
            onValue(reference, (snapshot) => {
                if (snapshot.exists()) {
                    const data = Object.values(snapshot.val())
                    setFriends(data)

                    data.map((friend, index) => {
                        GetLastMessage(friend, index)
                    })
                }
               
            })
        }
    }
    
    function getFriendImage() {
        const promises = friends.map((friend, index) => {
            const imageRef = refStorage(storage, `images/${friend.id}`);
            return getDownloadURL(imageRef)
                .then((url) => {
                    return url;
                })
                .catch((err) => {
                    
                    return "./user.svg"; 
                });
        });
    
        Promise.all(promises)
            .then((urls) => {
                setFriendsImages(urls);
            })
            .catch((error) => {
                console.error("Error fetching friend images:", error);
            });
    }

    useEffect(() => {
        ListFriends()
    }, [])
    useEffect(() => {
        if (friends.length > 0) {
            getFriendImage();
        }
    }, [friends]);

    const GetLastMessage = (friend, index) => {
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
                    })

                }

            })
            AllMessages.sort((a, b) => a.date - b.date)
            const newMessage = lastMessage
            newMessage[index] = (AllMessages[AllMessages.length - 1])
            setLastMessage(newMessage)
        })
    }

    const setChat=(friend,index)=>{
        setCurrentChat({
            firstName:friend.firstName,
            id:friend.id,
            username:friend.username,
            img:friendsImages[index]
        })
    }



    return (
        <S.Wrapper>
            {friends.map((friend, index) => {
                if (search === "" || search.toLowerCase() === friend.firstName.toLowerCase() || search.toLowerCase() === friend.username.toLowerCase())
                    return (<S.Chat key={friend.id} onClick={() => setChat(friend,index)}>
                        <S.UserImg src={friendsImages[index]} />
                        <S.MessagePreview>
                            <S.Name>{friend.firstName}</S.Name>

                            {lastMessage[index] && <S.Message>{lastMessage[index].message}</S.Message>}
                        </S.MessagePreview>
                    </S.Chat>)
            })}
        </S.Wrapper>
    )
}


export default Friends