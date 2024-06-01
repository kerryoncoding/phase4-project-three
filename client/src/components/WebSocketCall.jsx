import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup"


export default function WebSocketCall({ socket, user }) {
  const [messages, setMessages] = useState([]);

  // FORMIK 
  const formSchema = yup.object().shape({
    message: yup.string().required("Field can not be left blank").max(100, "Exceeds max length"),
  });

 
 
  const formik = useFormik({
    initialValues: {
      message: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      if (!values.message) {
        return;
      }
      socket.emit("data", user.username + ": " + values.message)
      formik.resetForm()
    },
  });

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
      <form onSubmit={formik.handleSubmit}>
        <input
          className="chat-message"
          type="text"
          id="message"
          value={formik.values.message}
          placeholder="Enter message..."
          onChange={formik.handleChange} />
        <button className="messageToggleButton" type="submit" onClick={formik.handleSubmit}>submit</button>
        <p style={{ color: "red" }}> {formik.errors.message}</p>
      </form>
      <hr className="breakline" />
      <ul>
        {messages.map((message, ind) => {
          return <li key={ind}> {message}</li>;
        })}
      </ul>
    </div>
  );
}



