import { useEffect, useState } from "react";

import api from "../api/api";
import socket from "../socket/socket";

import ChatBox from "../components/ChatBox";
import ChatInput from "../components/ChatInput";


const ChatPage = () => {

  const [username, setUsername] = useState("");

  const [joined, setJoined] = useState(false);

  const [messages, setMessages] = useState([]);

  const [onlineUsers, setOnlineUsers] = useState([]);

  const [typingUser, setTypingUser] = useState("");



  useEffect(() => {

    if (!joined) return;


    socket.connect();


    socket.emit(
      "join",
      username
    );


    socket.on(
      "newMessage",
      (message) => {

        setMessages((prev) => [
          ...prev,
          message
        ]);

      }
    );


    socket.on(
      "onlineUsers",
      (users) => {

        setOnlineUsers(users);

      }
    );


    socket.on(
      "userTyping",
      (user) => {

        if(user){
          setTypingUser(
            `${user} is typing...`
          );
        }

      }
    );


    socket.on(
      "userStoppedTyping",
      () => {

        setTypingUser("");

      }
    );


    return () => {

      socket.off("newMessage");

      socket.off("onlineUsers");

      socket.off("userTyping");

      socket.off("userStoppedTyping");

      socket.disconnect();

    };


  }, [joined, username]);



  useEffect(() => {

    if (!joined) return;


    const fetchMessages = async () => {

      try {

        const response = await api.get("/messages");

        setMessages(
          response.data.data
        );

      } catch(error){

        console.log(
          "Fetch messages error",
          error
        );

      }

    };


    fetchMessages();


  }, [joined]);



  const joinChat = () => {

    if(!username.trim()) return;

    setJoined(true);

  };



  const sendMessage = async (text) => {

    try {

      await api.post(
        "/messages",
        {
          username,
          message:text
        }
      );


    } catch(error){

      console.log(
        "Send message error",
        error
      );

    }

  };



  if(!joined){

    return (

      <div className="chat-container">

        <div className="join-card">

          <h1>
            💬 Realtime Chat
          </h1>


          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />


          <button onClick={joinChat}>
            Join Chat
          </button>


        </div>

      </div>

    );

  }



  return (

    <div className="chat-page">


      <header className="chat-header">

        <div>
          💬 Realtime Chat
        </div>


        <div className="online-status">

          Online:
          {" "}
          {onlineUsers.length}

        </div>

      </header>



      <div className="messages-area">


        <ChatBox
          messages={messages}
          username={username}
        />


        {
          typingUser && (

            <div className="typing-indicator">

              {typingUser}

            </div>

          )
        }


      </div>



      <ChatInput
        onSend={sendMessage}
      />


    </div>

  );

};


export default ChatPage;