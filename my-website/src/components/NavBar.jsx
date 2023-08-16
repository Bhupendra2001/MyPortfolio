import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { iphone, mobile, tablet } from "../responsive";
import { AiOutlineBars } from "react-icons/ai";
import logo from "./logo.png";

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  height: 70px;
  align-items: center;
  padding: 0px 10px 0px 10px;
  margin: 10px 20px 10px 10px;
  ${mobile({ margin: "0px", padding: "0px 15px 0px 10px" })}
  ${iphone({ margin: "0px", padding: "0px 15px 0px 10px" })}
  ${tablet({})}
`;

const Left = styled.div`
  color: #fff;
  margin-left: 11.4%;
  margin-top: 40px;
  padding: 10px;
  cursor: pointer;
  ${mobile({ marginLeft: "15px", padding: "0px" })}
  ${iphone({ marginLeft: "4%", padding: "10px", fontSize: "15px" })}
`;

const Right = styled.div`
  display: ${(props) => (props.prop == true ? "none" : "flex")};
  gap: 20px;
  z-index: 9;
  ${mobile({
    borderRadius: "10px",
    marginLeft: "70px",
    marginTop: "150px",
    marginRight: "1px",
    flexDirection: "column",
    gap: "1px",
    backgroundColor: "#fff",
  })}
`;
const List = styled.a`
  cursor: pointer;
  text-decoration: none;
  list-style: none;
  color: #fff;
  ${mobile({ color: "blue", marginLeft: "10px", padding: "10px" })}
  ${iphone({ fontSize: "15px", marginLeft: "5px", padding: "10px" })}
  padding : 10px;

  &:hover {
    color: yellow;
    border-bottom: 1px solid yellow;
    ${mobile({ border: "none", color: "red" })}
  }
`;

const Image = styled.img`
  width: 100px;
  height: 80px;
  border-radius: 10px;
  ${mobile({ width: "50px", height: "50px" })}
  ${iphone({ width: "70px", height: "70px" })}
`;

export const NavBar = () => {
  const [show, setShow] = useState(window.innerWidth <= 400);

  const handleClick = (e) => {
    setShow(!show);
  };
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener to update screenWidth on window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Container>
      <Left>
        <Image src={logo} />
      </Left>
      <Right prop={show}>
        <List href="/">Home</List>
        <List href="/about">About</List>
        <List href="/education">Education</List>
        <List href="/contact">Contact</List>
      </Right>
      {screenWidth <= 400 && (
        <AiOutlineBars
          onClick={handleClick}
          style={{ color: "#fff", cursor: "pointer" }}
        />
      )}
    </Container>
  );
};
