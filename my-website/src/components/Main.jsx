import React, { useState } from "react";
import ReactTyped from "react-typed";
import { styled, keyframes } from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import {SiLeetcode} from 'react-icons/si'
import pic from "./Pic.jpeg";
import { mobile, tablet, iphone } from "../responsive";

const Container = styled.div`
  height: auto;
  margin: 10%;
  padding: 20px;
  display: flex;
  background-color: black;
  border-radius: 20px;
  gap: 20px;

  ${mobile({
    flexDirection: "column-reverse",
    gap: "5px",
    margin: "25px 10px",
    height: "auto",
    padding: "20px 10px 10px 10px",
  })}
  ${iphone({
    flexDirection: "column-reverse",
    gap: "1px",
    margin: "5%",
    height: "auto",
    padding: "35px",
  })}
  ${tablet({
    gap: "0px",
    flexDirection: "column-reverse",
    height: "auto",
    padding: "10px",
  })}
`;
const MyProfile = styled.div`
  margin-top: 20px;
  padding-left: 10%;
  ${iphone({ margin: "4%" })}
  ${tablet({ margin: "20px" })}
 ${mobile({ marginTop: "0px" })}
`;
const MyDetails = styled.div`
  width: 50%;
  padding: 40px 10px 20px 20px;
  margin-top: 20px;
  overflow: hidden; 
  ${mobile({ width: "90%" })}
  ${iphone({ width: "95%" })}
  ${tablet({ width: "90%", textAlign: "center" })}
`;
const Heading = styled.p`
  color: #fff;
  margin: 0px;
`;
const Subheading = styled.p`
  color: #fff;
  overflow: hidden;
  // overflow: ${(props) => props.isOpen == false ? "hidden" : "wrap"};
  transition: max-height 0.3s ease;
  text-overflow: ${(props) => (props.isOpen ? "clip" : "ellipsis")};
  white-space: ${(props) => (props.isOpen ? "normal" : "nowrap")};
  max-height: ${(props) => props.isOpen == false ? "1000px" : "430px"};

`;
const MyName = styled.h2`
  color: #fff;
  margin: 0px;
`;
const Icons = styled.div`
  display: flex;
  gap: 25px;
  color: #1bf2e4;
  ${tablet({ justifyContent: "center" })}
`;

const Button = styled.button`
  margin-top: 25px;
  background-color: #1bf2e4;
  padding: 5px;
  border: 1px solid #1bf2e4;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 5px #1bf2e4;
  }
`;

const ProfilePic = styled.img`
  height: 85%;
  width: 90%;

  border-radius: 50%;
  box-shadow: 5px 10px 5px #1bf2e4;
  ${mobile({ marginTop: "0px" })}
  ${iphone({ marginTop: "20px" })}

  ${tablet({ height: "80%", width: "80%", marginTop: "30px" })}
`;

const Link = styled.a`
  color: #1bf2e4;
  ${tablet({ textAlign: "center" })}
  &:hover {
    ${tablet({ color: "orange" })}
  }
`;

export const Main = () => {
  const [showFullSubheading, setShowFullSubheading] = useState(false);
  const handleClick = (e)=>{
   setShowFullSubheading(!showFullSubheading)
  }
  const contents = [
    "Software developer",
    "Backend developer",
    "Frontend developer",
    "UI/UX designer",
  ];

  return (
    <Container>
      <MyDetails>
        <Heading>Hello , It's Me</Heading>
        <MyName>Bhupendra Namdev</MyName>
        <Heading>
          And I'm a{" "}
          <ReactTyped
            strings={contents}
            typeSpeed={100}
            loop
            backSpeed={10}
            cursorChar="|"
            showCursor={true}
            style={{ color: "#1bf2e4" }}
          />
        </Heading>
        <Subheading isOpen={showFullSubheading}>
          I'm an aspiring Full Stack Developer who has undergone an intensive
          8-month training program. Throughout this training period, I've delved
          into various aspects of web development, equipping myself with skills
          across both Frontend and Backend technologies. From crafting
          responsive and user-friendly interfaces to handling server-side logic
          and databases, I'm well-prepared to contribute effectively to the
          development process. I'm excited to embark on my professional journey
          and put my newfound skills to the test. If you're looking for a
          dedicated and eager learner to join your team, I'd love the
          opportunity to discuss how I can contribute to your projects.
        </Subheading>
        <Icons>
          <Link href="https://www.facebook.com/login/" target="_blank">
            <FaFacebook on style={{ fontSize: "35px", cursor: "pointer" }} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/bhupendra-namdev-03488a237/"
            target="_blank"
          >
            {" "}
            <BsLinkedin style={{ fontSize: "35px", cursor: "pointer" }} />
          </Link>
          <Link href="https://github.com/Bhupendra2001" target="_blank">
            {" "}
            <BsGithub style={{ fontSize: "35px", cursor: "pointer" }} />
          </Link>
          <Link href="https://leetcode.com/Bhupendra-Namdev/" target="_blank">
            <SiLeetcode style={{ fontSize: "35px", cursor: "pointer" }} />
          </Link>
        </Icons>
        <Button onClick={handleClick}>
        {showFullSubheading ? "Show Less" : "More About Me"}
        </Button>
      </MyDetails>
      <MyProfile>
        <ProfilePic src={pic} />
      </MyProfile>
    </Container>
  );
};
