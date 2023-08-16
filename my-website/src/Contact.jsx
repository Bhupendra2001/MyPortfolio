import React from 'react'
import { styled } from 'styled-components'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { UserForm } from './components/UserForm'
const Container = styled.div``
export const Contact = () => {
  return (
    <Container>
        <NavBar/>
        <UserForm/>
        <Footer/>
    </Container>
  )
}
