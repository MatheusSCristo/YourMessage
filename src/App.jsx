import React from "react"
import ChatProvider from "./context/currentChat"

const App = ({ children }) => {
  return (
      <ChatProvider>
        <div>
          {children}
        </div>
      </ChatProvider>
  )
}

export default App