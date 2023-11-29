import React,{createContext,useState} from "react";
export const ChatContext= createContext([])


function ChatProvider({children}){
    const [currentChat,setCurrentChat]=useState()
    
    return(
        <ChatContext.Provider value={{currentChat,setCurrentChat}}>
            {children}
        </ChatContext.Provider> 
    )
}

export default ChatProvider