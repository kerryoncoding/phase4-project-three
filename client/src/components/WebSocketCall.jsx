import { useEffect, useState } from "react";

export default function WebSocketCall({ socket, user }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [tagMessage, setTagMessage] = useState("");

  const handleText = (e) => {
    const inputMessage = e.target.value;
    // const inputMessage = user.username + ": " + tempMessage
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
      <h3>Enter messages here:</h3>
      <br></br>
      <input type="text" value={message} onChange={handleText} />
      <button className="messageToggleButton" onClick={handleSubmit}>submit</button>
      <hr className="breakline" />
      
      <ul>
        {messages.map((message, ind) => {
          return <li key={ind}> {message}</li>;
        })}
      </ul>
    </div>
  );
}