import React from "react";
import { styled } from "styled-components";
import { BsFacebook,  BsGithub, BsLinkedin } from "react-icons/bs";
import {SiLeetcode} from 'react-icons/si'
import { mobile, tablet , iphone} from "../responsive";

const Link = styled.a``
const Container = styled.div`
  padding: 55px 20px 55px 20px;
  display: flex;
  justify-content: space-between;
  background-color:red;
  margin : 10%;
  border-radius : 10px;

  ${iphone({ flexDirection : "column" ,padding : "20px" , margin : "5%"})}
  ${mobile({ flexDirection : "column" ,padding : "10px" , margin : "20px 10px" })}
  ${tablet({   height : "300px" , margin : "10%" , padding : "50px 20px 20px 10px"})}
`;
const Left = styled.div`
  margin-left: 30px;
 
`;

const Right = styled.div`
  display: flex;
  flex-direction : column;
  margin : 0px;
  padding : 0px;
  margin-right: 30px;

 ${mobile({ display : "none"})}
 ${iphone({ display : "none"})}
  
`;
const Details = styled.p`
font-size : 20px;
color : yellow;

${tablet({ fontSize : "20px"})}
`;
const IconCss = styled.div`
  cursor: pointer;
  background-color: #af33c8;
  padding: 10px;
  color: yellow;
 height : 25px;
  border-radius : 50px;
  &:hover{
    color : blue;
    ${tablet({ backgroundColor: "blue" })}
  }
  ${tablet({ height : "30px" , padding : "10px" })}
`;

const Icons = styled.div`
display : flex;
margin : 150px 0px 0px 10px;
padding : 20px 30px 1px 10px;;
font-size : 25px;
 gap : 15px;
 ${mobile({ margin : "10px 5px 5px 10px"})}
 ${iphone({ margin : "10px 5px 5px 10px"})}

${tablet({ fontSize : "30px"  , gap : "10px", margin : "50px 15px 10px 25px" ,padding : "0px 10px 10px 1px" })}
 
`
const Services = styled.div`
${tablet({marginLeft : "30px"})}
`

export const Footer = () => {
 const style = { color : "yellow" , textDecoration : "none"}
  return (
    <Container>
      <div>

      <Left>
        <Details>My Contact</Details>
        <Details> Email : Bnamdev20@gmail.com </Details>
        <Details> Phone : 7024443376 </Details>
        <Details> City : Jabalpur </Details>
      </Left>
      <Icons>
        <IconCss>
         <Link style={{color : "yellow"}} target="_blank" href={'https://www.facebook.com/login/'}>
         <BsFacebook />
         </Link> 
        </IconCss>

        <IconCss>
          <Link style={{color : "yellow"}} target="_blank" href={'https://leetcode.com/Bhupendra-Namdev/'}  >
          <SiLeetcode />
          </Link>
        </IconCss>

        <IconCss>
          <Link style={{color : 'yellow'}} target="_blank"  href={'https://www.linkedin.com/in/bhupendra-namdev-03488a237/'}>
          <BsLinkedin />
          </Link>
        </IconCss>

        <IconCss>
          <Link style={{color : "yellow"}} target="_blank" href={'https://github.com/Bhupendra2001'}>
          <BsGithub />
          </Link>
        </IconCss>
     </Icons>
      </div>
      <Right>
        <Services>
          <Details><Link style={style} href="/">Home</Link></Details>
          <Details><Link style={style} target="_blank"  href="https://shopping-website-project.netlify.app/">Top Project</Link></Details>
          <Details><Link  style={style} href="/education" >Education</Link></Details>
          <Details><Link style={style} href="/about">about</Link></Details>
        </Services>
      </Right>
    </Container>
  );
};
