import React, { useContext, useEffect, useState } from 'react'
import * as S from "./stylesMessages"
import { auth, database } from '../../firebase/firebase'
import { ref, onValue } from 'firebase/database'
import { ChatContext } from '../../context/currentChat'

const Messages = () => {

    const [messages, setMessages] = useState([])
    const [messagesSent, setMessagesSent] = useState([])
    const [messagesReceived, setMessagesReceived] = useState([])
    const {currentChat}=useContext(ChatContext)

    const GetMessagesSent = () => {
        if(currentChat){
        auth.onAuthStateChanged((user) => {
            if (user) {
                const id = user.uid;
                const reference = ref(database, `users/${id}/sent/${currentChat.id}`);
                onValue(reference, (snapshot) => {
                    if (snapshot.exists()) {
                        const data = Object.values(snapshot.val());
                        setMessagesSent(data);
                    }
                    else
                        setMessagesSent([])

                })
            }
        })
    }
    }

    const getMessageReceived = () => {
        if(currentChat){
            const user=auth.currentUser
            if (user) {
                const id = user.uid;
                const reference = ref(database, `users/${id}/received/${currentChat.id}`);
                onValue(reference, (snapshot) => {
                    if (snapshot.exists()) {
                        const data = Object.values(snapshot.val());
                        setMessagesReceived(data);
                    }
                    else
                        setMessagesReceived([])

                })
            }
        }}
    


    useEffect(() => {
        GetMessagesSent();
        getMessageReceived()
    }, [currentChat]);

    useEffect(() => {
        RearrangeMessages();
    }, [messagesSent,messagesReceived]);

    const RearrangeMessages = () => {
        let messagesAll = []
        messagesSent.map((e) => messagesAll.push(e))
        messagesReceived.map((e) => messagesAll.push(e))
        messagesAll.sort((a, b) => a.date - b.date)
        setMessages(messagesAll);

    }

    return (
        <S.Wrapper>
            {messages.map((data, i) => (
                <S.Message $received={data.id==auth.currentUser.uid?"false":"true"} key={i}>
                    <S.text>{data.message}</S.text>
                </S.Message>
            ))
            }
        </S.Wrapper>
    )
}

export default Messages