import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([
    {
      name: "Marudhu",
      image:
        "https://media.istockphoto.com/photos/woman-standing-on-city-street-at-night-picture-id130406720?b=1&k=20&m=130406720&s=170667a&w=0&h=RfIUneYKwpizKEGwgMCBGwOBCxzTtTdQ1s6MWBw5QlQ=",
      message: "Whats Up. Nayan....",
    },
    {
      name: "Nayanthara",
      image:
        "https://media.istockphoto.com/photos/portrait-of-woman-wearing-neck-ruff-picture-id1330884705?b=1&k=20&m=1330884705&s=170667a&w=0&h=mKIjSWS1To8wxnJ5Ju4O05IjBwVeCbKSfF-dzskBRDw=",
      message: "How Is Going Marudhu....",
    },
    {
      message: "How Are You Marudhu I Love You!!!!",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessage([...message, { message: input }]);
    setInput(" ");
  };

  return (
    <Container>
      <h3>YOU MATCHED WITH MARUDHU ON 10/08/2021 </h3>
      {message.map((mess) =>
        mess.name ? (
          <Messages>
            <Avatar
              className="chatscreenImage"
              alt={mess.name}
              src={mess.image}
            />
            <p>{mess.message}</p>
          </Messages>
        ) : (
          <Messages>
            <p className="userMessage">{mess.message}</p>
          </Messages>
        )
      )}
      <InputField>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Write Your Message..."
        ></input>
        <button onClick={handleSend} type="submit">
          SEND
        </button>
      </InputField>
    </Container>
  );
};

export default ChatScreen;

const Container = styled.div`
  width: 100%;
  margin: auto;

  h3 {
    text-align: center;
    color: lightgray;
    padding: 20px;
  }
`;

const Messages = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  p {
    margin-left: 10px;
    background-color: lightgray;
    padding: 15px;
    border-radius: 20px;
    width: fit-content;
  }
  .userMessage {
    margin-left: auto;
    background-color: #34b7f1;
  }
`;

const InputField = styled.form`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid lightgray;

  & > input {
    flex: 1;
    padding: 10px;
    border: none;

    :focus {
      outline: none;
    }
  }
  & > button {
    margin-right: 10px;
    background-color: white;
    border: none;
    font-weight: bold;
    cursor: pointer;
    color: #fe3d71;
  }
`;
