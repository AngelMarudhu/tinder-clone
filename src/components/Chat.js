import styled from "styled-components";
import React from "react";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const Chat = ({ name, message, timestamp, profilepic }) => {
  return (
    <Main>
      <Link to={`/chat/${name}`}>
        <Container>
          <Avatar className="chatImage" src={profilepic} />
          <Info>
            <h2>{name}</h2>
            <p>{message}</p>
          </Info>
          <p>{timestamp}</p>
        </Container>
      </Link>
    </Main>
  );
};

export default Chat;

const Main = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 70px;

  p {
    color: gray;
  }
`;

const Info = styled.div`
  flex: 1;
  margin-left: 10px;

  p {
    color: grey;
  }
`;

// const TimeStamp = styled.div``;
