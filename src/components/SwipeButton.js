import React from "react";
import styled from "styled-components";
import ReplyIcon from "@mui/icons-material/Reply";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { IconButton } from "@mui/material";

const SwipeButton = () => {
  return (
    <Container>
      <Buttons className="btn">
        <IconButton>
          {" "}
          <ReplyIcon fontSize="large" />
        </IconButton>
        <IconButton>
          {" "}
          <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton>
          <StarRateIcon fontSize="large" />
        </IconButton>
        <IconButton>
          {" "}
          <FavoriteIcon fontSize="large" />
        </IconButton>
        <IconButton>
          {" "}
          <FlashOnIcon fontSize="large" />
        </IconButton>
      </Buttons>
    </Container>
  );
};

export default SwipeButton;

const Container = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const Buttons = styled.div`
  position: fixed;
  bottom: 5vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  & > .MuiIconButton-root {
    background-color: white;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.3);
    padding: 10px;
    color: #ff6666;

    &:first-child {
      color: green;
    }
    &:nth-child(2) {
      color: violet;
    }
    &:nth-child(3) {
      color: yellow;
    }
    &:last-child {
      color: purple;
    }
  }
`;
