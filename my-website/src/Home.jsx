import React from 'react'
import { NavBar } from './components/NavBar'
import { styled } from 'styled-components'
import { Main } from './components/Main'
import { Projects } from './components/Projects'
import { Skill } from './components/Skill'
import { Footer } from './components/Footer'
import { UserForm } from './components/UserForm'

const Container = styled.div`

width : 100%;
height : 100%;
position : relative;

`
export const Home = () => {
  return (

    <Container>
        <NavBar/>
        <Main/>
        <Projects/>
        <Skill/>
        <UserForm/>
        <Footer/>
    </Container>

  )
}
