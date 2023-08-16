import React from 'react'
import { styled } from 'styled-components'
import {iphone, mobile, tablet} from '../responsive'

const Container = styled.div`
color : #fff;
margin : 10%;


padding : 4%;
background-color :  #f09c8f;
border-radius : 30px;
${mobile({ margin : "10px" , padding : "10px"})}
${iphone({ margin : "5%" , padding : "10px"})}
${tablet({ margin : "5%" , padding : "10px"})}

`

const ProjectContainer = styled.div`

border : 1px solid pink;
margin : 15px;
padding : 20px;
border-radius : 10px;
${iphone({ width : "90%"})}
`
const Wrapper = styled.div`
display : flex;
flex-wrap : wrap;
justify-content: flex-start;
gap : 20px;
`
const Link = styled.a`
text-decoration : none;
color : #fff;



`

const Header = styled.h2`
margin-left : 20px;
text-align : center;
color :yellow;
`

const ProjectName = styled.h3`

`
const Image = styled.img`
width : 270px;
height : 200px;
border-radius : 20px;

${iphone({ width : "99%", height : "350px"})}
${tablet({ width : "450px", height : "350px"})}
${mobile({ width : "230px" , height : "200px"})}
`

export const Projects = () => {
  return (
    <Container>
        <Header> All My Projects </Header>
       
        <Wrapper>
          


        <ProjectContainer>
          <Image src='https://img.freepik.com/premium-vector/online-shopping-concept-illustration-perfect-web-design-banner-mobile-app-landing-page_505557-3397.jpg' />
        <ProjectName> Product Management</ProjectName>
        <Link href='https://shopping-website-project.netlify.app/' target='_blank'> Click here </Link>
        </ProjectContainer>


        <ProjectContainer>
        <Image src='https://5.imimg.com/data5/XC/HS/MY-48198063/library-management-system.png' />
        <ProjectName> Books Management</ProjectName>
        <Link href='https://online-book-management.netlify.app/' target='_blank'>Click here</Link>
        </ProjectContainer>


        <ProjectContainer>
        <Image src='https://img.freepik.com/premium-photo/online-hotel-accommodation-booking-website-provide-modish-reservation-system_31965-57303.jpg' />
        <ProjectName>Hotel Management</ProjectName>
        <Link href='https://online-hotels-booking.netlify.app/' target='_blank' >Click here</Link>
        </ProjectContainer>

        <ProjectContainer>
          <Image src='https://static.vecteezy.com/system/resources/previews/001/937/556/original/schedule-events-business-people-planning-event-news-reminder-online-schedule-calendar-concept-advertising-time-management-task-planning-training-activities-schedule-work-life-balancing-vector.jpg' />
        <ProjectName>Event Schedule </ProjectName>
        <Link href='https://events-schedule.netlify.app/' target='_blank' >Click here</Link>
        </ProjectContainer>

        <ProjectContainer>
          <Image src='https://images04.nicepage.com/feature/583347/blog-category.jpg' />
        <ProjectName>Blog Website</ProjectName>
        <Link href='https://new-blog-website.netlify.app/register' target='_blank' > Click here</Link>
        </ProjectContainer>

        </Wrapper>

    </Container>
  )
}
