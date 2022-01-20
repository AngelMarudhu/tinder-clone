import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";
import { db } from "./Firebase";
import { onSnapshot, collection } from "firebase/firestore";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "people"), (snapshot) =>
      setPeople(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <Container>
      <Content>
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <ArtBoard image={person.url}>
              <h3>{person.name}</h3>
            </ArtBoard>
          </TinderCard>
        ))}
      </Content>
    </Container>
  );
};

export default TinderCards;

const Container = styled.div`
  width: 100%;
  margin: auto;

  h1 {
    color: #ff6666;
    text-align: center;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5vh;

  .swipe {
    position: absolute;
  }
`;

const ArtBoard = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  position: relative;
  max-width: 85vw;
  padding: 20px;
  height: 50vh;
  width: 600px;
  border-radius: 30px;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.3);

  & > h3 {
    position: absolute;
    bottom: 10px;
    color: #ffcc66;
  }
`;

//  style={{ backgroundImage: `url(${person.url})` }}
