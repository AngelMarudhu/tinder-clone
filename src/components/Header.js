import React from "react";
import "./Header.css";
import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ backButton }) => {
  const navigation = useNavigate();
  return (
    <Container>
      <Content>
        <Logo>
          {backButton ? (
            <IconButton
              onClick={() => navigation(backButton, { replace: true })}
            >
              <ArrowBackIosIcon className="icon" fontSize="large" />
            </IconButton>
          ) : (
            <IconButton>
              <PersonIcon className="icon" fontSize="large" />
            </IconButton>
          )}

          <Link to="/">
            <IconButton>
              <img src="/images/tinder.svg" alt="" />
            </IconButton>
          </Link>

          <Link to="/chat">
            <IconButton>
              <ForumIcon className="icon" fontSize="large" />
            </IconButton>
          </Link>
        </Logo>
      </Content>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  top: 0;
  left: 0;
`;

const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 100%;
`;

const Logo = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f9f9f9;

  img {
    height: 40px;
  }

  .icon {
    padding: 20px;
  }
`;
