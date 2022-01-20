import React from "react";
import styled from "styled-components";
import Chat from "./Chat";

const Chats = () => {
  return (
    <Container>
      <Chat
        name="Marudhu"
        message="Love You Nayan"
        timestamp="9 Seconds Ago"
        profilepic="https://github.com/thumbor/thumbor/raw/master/example.jpg"
      />
      <Chat
        name="Naynthara"
        message="Love You Marudhu"
        timestamp="55 Seconds Ago"
        profilepic="https://media.istockphoto.com/photos/woman-standing-on-city-street-at-night-picture-id130406720?b=1&k=20&m=130406720&s=170667a&w=0&h=RfIUneYKwpizKEGwgMCBGwOBCxzTtTdQ1s6MWBw5QlQ="
      />
      <Chat
        name="Rakul"
        message="Love You Marudhupandiyan"
        timestamp="73 Seconds Ago"
        profilepic="https://media.istockphoto.com/photos/portrait-of-woman-wearing-neck-ruff-picture-id1330884705?b=1&k=20&m=1330884705&s=170667a&w=0&h=mKIjSWS1To8wxnJ5Ju4O05IjBwVeCbKSfF-dzskBRDw="
      />
      <Chat
        name="Madonnna"
        message="Love You MarudhuThara"
        timestamp="98 Seconds Ago"
        profilepic="https://media.istockphoto.com/photos/young-actress-reading-scenario-on-stage-in-theatre-picture-id1210331839?b=1&k=20&m=1210331839&s=170667a&w=0&h=vtD_wXYwwh-74JoWaIUOUzZPwDQ8kS4opZlYsLm4-sA="
      />
    </Container>
  );
};

export default Chats;

const Container = styled.div``;
