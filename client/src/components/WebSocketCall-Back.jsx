import { useEffect, useState } from "react";

export default function WebSocketCall({ socket, user }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [tagMessage, setTagMessage] = useState("");
  

  const handleText = (e) => {
    const inputMessage = e.target.value;
    setMessage(inputMessage);
    addTag(inputMessage)
    
  };

  function addTag(inputMessage) {
    const tempMessage = user.username + ": " + inputMessage
    setTagMessage(tempMessage)
  }

  const handleSubmit = () => {
    if (!message) {
      return;
    }
    socket.emit("data", tagMessage);
    setMessage("");
    setTagMessage("");
  };

  useEffect(() => {
    socket.on("data", (data) => {
      setMessages([...messages, data.data]);
    });
    return () => {
      socket.off("data", () => {
        console.log("data event was removed");
      });
    };
  }, [socket, messages]);

  return (
    <div>
      <br></br>
      <input
        className="chat-message"
        type="text"
        value={message}
        placeholder="Enter message..."
        onChange={handleText} />
        <button className="messageToggleButton" type="submit" onClick={handleSubmit}>submit</button>      
      <hr className="breakline" />
      <ul>
        {messages.map((message, ind) => {
          return <li key={ind}> {message}</li>;
        })}
      </ul>
    </div>
  );
}



