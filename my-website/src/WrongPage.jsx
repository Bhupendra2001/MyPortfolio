import React from 'react'
import { styled } from 'styled-components'
const Container = styled.div`
  width : 100%;
  height : 640px;
  padding : 10px;
`
const Title = styled.h2`
color : #fff;

padding : 10px;
text-align : center;`
const Wrapper = styled.div`
border : 1px solid gray;
margin : auto;
width : 70%;
height : 70%;
padding : 5%;`
const Message = styled.div`color : yellow;
padding : 10px;
text-align : center;
`
const TT = styled.h1`
color : red;
text-align : center;
font-size : 100px;
`

const WrongPage = () => {
  return (
    <Container>
        <Wrapper>
        <Title> Page Not Found !</Title>
        <Message>You enter wrong url </Message>
         <TT> 404 </TT>
        </Wrapper>
    </Container>
  )
}

export default WrongPage
