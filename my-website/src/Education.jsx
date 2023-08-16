import React from "react";

import { styled } from "styled-components";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { mobile , tablet , iphone } from "./responsive";
const Container = styled.div`
 
`;
const Wrapper = styled.div`
 border : 1px solid pink;
 ${mobile({ marginTop : "30px"})}
 ${iphone({ marginTop : "40px"})}
 margin : 5%;
 padding : 4%;
 border-radius : 10px;
 background-color : yellow;
`;
const Title = styled.h4`
 color : teal;
 padding : 5px;
`;
const College = styled.p`
padding : 5px;
 
 &:hover{
   
    background-color : blue;
    width : 360px;
    opacity : 0.7;
    border-radius : 10px;
    color : yellow;
    cursor : pointer;
    ${mobile({  width : "280px"})}
    ${mobile({  width : "280px"})}
 }
`;
const Branch = styled.p`
padding : 5px;
&:hover{
   
    background-color : orange;
    width : 340px;
    opacity : 0.7;
    border-radius : 10px;
    color : #fff;
    cursor : pointer;
    ${mobile({  width : "280px"})}
 }
`;

const Year = styled.span`
padding : 5px;
&:hover{
   
    background-color : red;
    width : 190px;
    opacity : 0.7;
    border-radius : 10px;
    color : #fff;
    cursor : pointer;
    ${mobile({  width : "240px"})}
 }
`;
const Percentage = styled.p`
padding : 5px;
&:hover{
   
    background-color : black;
    width : 180px;
    opacity : 0.7;
    border-radius : 10px;
    color : yellow;
    cursor : pointer;
    ${mobile({  width : "180px"})}
 }

`;
const BR = styled.br``

export const Education = () => {
  return (
    <Container>
        <NavBar/>
      <Wrapper>
        <Title> B-Tech</Title>
        <College> Global Engineering College Jabalpur (MP)</College>
        <Branch> Branch - Electronics and Communication</Branch>
        <Year>Year - [08/2018 - 07/2022]</Year> <BR/>
        <Percentage> Percentage - 79.97 %</Percentage>
      </Wrapper>
      <Wrapper>
        <Title> 12th (School)</Title>
        <College> Maharashtra Higher Secondary School (MP)</College>

        <Year>Year - [06/2017 - 07/2018]</Year><BR/>
        <Percentage> Percentage - 74.6%</Percentage>
      </Wrapper>
      <Wrapper>
      <Title> 10th (School)</Title>
        <College> Gov Higher Secondary School (MP)</College>

        <Year>Year - [06/2015 - 07/2016]</Year><BR/>
        <Percentage> Percentage - 80.1%</Percentage>
      </Wrapper>
      <Footer/>
    </Container>
  );
};
