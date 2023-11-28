import React, { useEffect, useState } from 'react'
import * as S from "./stylesMessages"

const Messages = () => {
    const date=new Date("November 27, 2023 03:24:00")
    const date3=new Date("November 27, 2023 03:26:00")
    const date2=new Date("November 27, 2023 03:25:00")
    const date4=new Date("November 27, 2023 03:28:00")
    const [messages,setMessages]=useState([])

    const MessagesReceived={
        sarah01:{
            message:[{
                received:true,
                date:date.getTime(),
                text:"Oi meu amor"
            },
            {
                received:true,
                date:date3.getTime(),
                text:"Tudo bem? "
            }]
        },
    }
    const MessagesSend={
        sarah01:{
            message:[{
                received:false,
                date:date2.getTime(),
                text:"Oi princesa"
            },{
                received:false,
                date:date4.getTime(),
                text:"To bem"
            }]
        }
    }

    const RearrangeMessages=()=>{
        let messagesReceived=Object.values(MessagesReceived).map((e)=>e.message);
        let messagesSend=Object.values(MessagesSend).map((e)=>e.message);
        let messagesAll=[]
        messagesReceived.map((message)=>message.map((e)=>messagesAll.push(e)))
        messagesSend.map((message)=>message.map((e)=>messagesAll.push(e)))
        messagesAll.sort((a,b)=>a.date - b.date)
        setMessages(messagesAll)
        
        
    }
    useEffect(()=>{
        RearrangeMessages()
    },[])
    

  return (
        <S.Wrapper>
            
        {messages.map((data,i)=>(
            <S.Message $received={data.received.toString()} key={i}>
                <S.text>{data.text}</S.text>
                </S.Message>
        ))
        }
        </S.Wrapper>
  )
}

export default Messages