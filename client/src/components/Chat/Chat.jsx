import { useState } from "react";
import HomeLayout from "../../layout/HomeLayout/HomeLayout";
import Splash from "../../components/splash/splash";
import ChatMessage from "./ChatMessage";
import SideMenu from "../SideMenu/SideMenu";
import "./Chat.css";
import "./normal.css";

function Chat() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  const [chatLog, setChatLog] = useState([
    {
      user: "gpt",
      message: "How can I help you?",
    },
  ]);

  async function handleSubmit(e) {
    e.preventDefault();
    const newMessage = { user: "me", message: input };
    setChatLog([...chatLog, newMessage]);
    setInput("");

    try {
      const response = await fetch("http://localhost:3080/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: newMessage.message,
        }),
      });

      const data = await response.json();

      if (data.message) {
        // Update the last message in the chatLog with the response
        setChatLog((prevChatLog) => [
          ...prevChatLog.slice(0, -1),
          { user: "gpt", message: data.message },
        ]);
      } else {
        console.error("Unexpected response format from server:", data);
      }
    } catch (error) {
      console.error("Error communicating with the server:", error);
    }
  }

  const handleChange = (e) => {
    return setInput(e.target.value);
  };

  return (
    <HomeLayout>
      {loading ? (
        <Splash />
      ) : (
        <section
          style={{
            padding: "60px 24px 100px 24px",
            backgroundColor: "#f3f4f6",
            height: "auto",
            width: "100%",
          }}
        >
          <div className="App">
            <section className="chatbox">
              <div className="chat-log">
                {chatLog.map((message, index) => (
                  <ChatMessage key={index} message={message} />
                ))}
              </div>
              <div className="chat-input-holder">
                <form onSubmit={handleSubmit}>
                  <input
                    placeholder="Search here..."
                    value={input}
                    className="chat-input-textarea"
                    rows="1"
                    onChange={handleChange}
                  ></input>
                </form>
              </div>
            </section>
          </div>
        </section>
      )}
    </HomeLayout>
  );
}

export default Chat;
