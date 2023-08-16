import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { mobile , tablet ,iphone} from './responsive'
const Container = styled.div``;
const Title = styled.h2`
  text-align: center;
  color: red;
`;

const Content = styled.p`
  background-color: teal;
  padding: 50px;
  margin: 10%;
  cursor: pointer;
  color :  #4ee9ec;
  border-radius : 1px 100px 1px 100px;
  ${mobile({})}
  ${tablet({})}
  ${iphone({ margin : "5%"})}
`;

export const About = () => {

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

  const style = screenWidth <= 400 ? {margin: "0px 10px 0px 10px"} : screenWidth <= 800 ? { margin : " 0% 5% " , padding : "2%"} : { margin: "0px 10% 0px 10%" , padding : '2%' , color : "teal" };
  return (
    <Container>
      <NavBar />

      <Title>About Me</Title>
      <Content>
        Hello! I'm Bhupendra Namdev, a dedicated and passionate MERN stack
        developer with a strong foundation in building modern and responsive web
        applications. With a keen eye for detail and a knack for
        problem-solving, I thrive on turning innovative ideas into functional
        and user-friendly digital experiences.
      </Content>
      <Title>My Expertise:</Title>

      <Accordion style={style}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>MERN Stack Mastery:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I specialize in the MERN stack – MongoDB, Express.js, React, and
            Node.js. From designing robust backends with Express.js and Node.js
            to creating interactive user interfaces using React, I'm adept at
            every layer of the stack.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={style}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel2a-header"
        >
          <Typography>Frontend Magic:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Crafting dynamic and engaging user interfaces is my forte. I have
            hands-on experience with React, utilizing its component-based
            architecture to develop seamless UIs that deliver exceptional user
            experiences.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={style}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel2a-header"
        >
          <Typography>Backend Wizardry:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I'm skilled in developing scalable and efficient backend solutions
            using Express.js and Node.js. Whether it's building APIs, handling
            data storage with MongoDB, or implementing authentication systems,
            I'm committed to creating performant server-side functionalities.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={style}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel2a-header"
        >
          <Typography>Data Management:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            With MongoDB as my go-to database, I'm well-versed in handling data
            storage, retrieval, and management. I can design database schemas
            that align with the application's requirements and ensure smooth
            data flow
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Title>Why Choose Me:</Title>

      <Accordion style={style}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel2a-header"
        >
          <Typography>Problem Solver:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I approach challenges as opportunities for growth. Complex issues
            motivate me to delve deeper into problem-solving and explore
            innovative solutions.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={style}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel2a-header"
        >
          <Typography>Collaborative Spirit:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I value teamwork and effective communication. I thrive in
            collaborative environments, where diverse perspectives come together
            to create exceptional end products.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={style}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel2a-header"
        >
          <Typography>Constant Learner:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The world of technology is ever-evolving, and I'm committed to
            continuous learning. I stay up-to-date with the latest trends and
            best practices to ensure that my work is at the forefront of
            industry standards.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={style}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel2a-header"
        >
          <Typography> Passionate Creator:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Web development isn't just a job for me – it's a passion. I'm driven
            by the excitement of turning ideas into reality and building
            applications that resonate with users.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Footer />
    </Container>
  );
};
