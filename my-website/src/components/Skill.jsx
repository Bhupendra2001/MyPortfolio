import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

import { Radar, RadarChart, PolarGrid, 
  PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { mobile, tablet, iphone } from "../responsive";

const Container = styled.div`
  background-color: #b237f0;
  padding: 30px;
  border-radius: 10px ;
  margin: 10%;
  display : flex;
  gap : 20px;
  ${mobile({  gap : "0px", flexDirection : "column" , margin : "10px" , padding : "10px"})}
  ${tablet({ flexDirection : "column"  })}
  ${iphone({ flexDirection : "column" , margin : "5%" , padding : "15px" })}

`;
const Title = styled.h3`
  text-align: center;
  color: yellow;
`;

const SkillCont = styled.div`
  padding: 20px;
  color : yellow;
  display : flex;
flex-direction : column;
align-items : center;

`;
const SkillChart = styled.div`

margin-top : 50px;
align-items : center;

${tablet({ marginTop : "0px"  })}
${mobile({ marginTop : "0px"  })}
${iphone({ marginLeft : "10%"  })}

`
const SkillWrapper = styled.div`
border : 1px solid yellow;
padding : 5px 10px 1px 10px;
margin : 5px;
border-radius : 10px;
font-size : 14px;
${tablet({ fontSize : "30px"  })}
${mobile({ fontSize : "10px" , width : "230px" })}

`

export const Skill = () => {

  const marks = [
    {
      value: 0,
    },
    {
      value: 10,
    },
    {
      value: 20,
    },
    {
      value: 30,
    },
    {
      value: 40,
    },
    {
      value: 50,
    },
    {
      value: 60,
    },
    {
      value: 70,
    },
    {
      value: 80,
    },
    {
      value: 90,
    },
    {
      value: 100,
    },
  ];

 
  
  const data = [
    { name: 'NodeJS', x: 90 },
    { name: 'Git', x: 70 },
    { name: 'JavaScript', x: 90 },
    { name: 'GitHub', x: 70 },
    { name: 'ReactJS', x: 80 },
    { name: 'CSS', x: 70 },
    { name: 'HTML', x: 80 },
    { name: 'AWS', x: 50 },
    { name: 'MongoDB', x: 80 },
    { name: 'SQL', x: 60 },
    { name: 'Data Structure', x: 70 },
];
 
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


  let size = screenWidth <= 400 ? { width : 200} : screenWidth <= 800 ? {width : 320} : { width: 500 }
  
  return (
    <Container>
      <SkillCont>
      <Title>All My Skills</Title>
      <SkillWrapper>

        Git
        <Box sx={size}>
          <Slider
            aria-label="Temperature"
            value={70}
            valueLabelDisplay="auto"
            step={10}
            color="primary"
          />{" "}
        </Box>
      </SkillWrapper>

      <SkillWrapper>

        GitHub
        <Box sx={size}>
          <Slider
            aria-label="Temperature"
            value={70}
            valueLabelDisplay="auto"
            step={10}
            color="primary"
          />{" "}
        </Box>
      </SkillWrapper>
      <SkillWrapper>

        NodeJS
        <Box sx={size}>
          <Slider
            aria-label="Temperature"
            value={90}
            valueLabelDisplay="auto"
            step={10}
            color="primary"
          />{" "}
        </Box>
      </SkillWrapper>
      <SkillWrapper>

        JavaScript
        <Box sx={size}>
          <Slider
            aria-label="Temperature"
            value={80}
            valueLabelDisplay="auto"
            step={10}
            color="primary"
          />{" "}
        </Box>
      </SkillWrapper>
      <SkillWrapper>

        ReactJS
        <Box sx={size}>
          <Slider
            aria-label="Temperature"
            value={90}
            valueLabelDisplay="auto"
            step={10}
            color="primary"
          />{" "}
        </Box>
      </SkillWrapper>
      <SkillWrapper>

        CSS
        <Box sx={size}>
          <Slider
            aria-label="Temperature"
            value={70}
            valueLabelDisplay="auto"
            step={10}
            color="primary"
          />{" "}
        </Box>
      </SkillWrapper>
      <SkillWrapper>

        HTML
        <Box sx={size}>
          <Slider
            aria-label="Temperature"
            value={80}
            valueLabelDisplay="auto"
            step={10}
            color="primary"
          />{" "}
        </Box>
      </SkillWrapper>
      <SkillWrapper>
      MongoDB
        <Box sx={size}>
          <Slider
            aria-label="Temperature"
            value={80}
            valueLabelDisplay="auto"
            step={10}
            color="primary"
          />{" "}
        </Box>
      </SkillWrapper>
      <SkillWrapper>
      Data Structure
        <Box sx={size}>
          <Slider
            aria-label="Temperature"
            value={70}
            valueLabelDisplay="auto"
            step={10}
            color="primary"
          />{" "}
        </Box>
      </SkillWrapper>
      <SkillWrapper>

        SQL
        <Box sx={size}>
          <Slider
            aria-label="Temperature"
            value={60}
            valueLabelDisplay="auto"
            step={10}
            color="primary"
          />{" "}
        </Box>
      </SkillWrapper>
      <SkillWrapper>

        AWS
        <Box sx={size}>
          <Slider
            aria-label="Temperature"
            value={50}
            valueLabelDisplay="auto"
            step={10}
            color="primary"
          />{" "}
        </Box>
      </SkillWrapper>
       
       
      </SkillCont>
      <SkillChart>
        <Title>Skill Chart</Title>
       
       {screenWidth <= 400 ? <RadarChart height={500} width={275} 
            outerRadius="70%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name"
             tick={{ fill: 'yellow' , fontSize : "9px"}}
             tickLine={false}
             />
            <PolarRadiusAxis />
            <Radar dataKey="x" stroke="yellow" 
                fill="teal" fillOpacity={0.6} />
        </RadarChart >
         :  screenWidth <= 800 ?
         
         <RadarChart height={400} width={335} 
            outerRadius="70%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name"
             tick={{ fill: 'yellow' , fontSize : "10px"}}
             tickLine={false}
             />
            <PolarRadiusAxis />
            <Radar dataKey="x" stroke="yellow" 
                fill="teal" fillOpacity={0.6} />
        </RadarChart > 
        :
        <RadarChart height={500} width={575} 
        outerRadius="70%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name"
         tick={{ fill: 'yellow' , fontSize : "18px"}}
         tickLine={false}
         />
        <PolarRadiusAxis />
        <Radar dataKey="x" stroke="yellow" 
            fill="teal" fillOpacity={0.6} />
    </RadarChart >
        
        }


      </SkillChart>
    </Container>
  );
};
