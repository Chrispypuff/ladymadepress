import React from 'react'
import Head from 'next/head'
import NavBar from '../components/nav-bar'
import PageHero from '../components/heroes/page-hero'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SideDrawer from '../components/SideDrawer/sideDrawer'
import Backdrop from '../components/backdrop/backdrop'
import Footer from '../components/footer'
import ProjectNav from '../components/ProjectNav/project-nav'
import Carousel from 'react-bootstrap/Carousel'

export default function Digital(props) {
    
    const [sideDrawerOpen, setOpen] = React.useState(false)
  
    let sideDrawer, backdrop;

    if (sideDrawerOpen) {
        sideDrawer = <SideDrawer />
        backdrop = <Backdrop backdropClickHandler={() => setOpen(!sideDrawerOpen)}/>
    }

    return (
    <div className="digital">
        <Head>
            <title>Digital Design</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="Digital designs ranging from social media covers and sponsored content, to digital illustrations and animated gifs." />
            <meta name="keywords" content="Illustration, social media design, facebook post designs, logo design, digital illustration Louisville " />
        </Head>
       <header>
            <NavBar drawerClickHandler={() => setOpen(!sideDrawerOpen)}/> 
                {sideDrawer}
                {backdrop}
            <PageHero pageName="digital" pageTitle="Digital Design" pageDescription="Marketing with gifs, and designing cover photos that stay on brand let me explore all the possibilities digital design offers. I try to connect with each audience and bring a bit of fun to social posts."/>     
        </header>
        <main>
            <Container>
                <Row>
                    <Col xs={12}>
                        <img src="/digital/01.gif" alt="Big Horn Design Cover Images Gif" />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6}>
                        <img src="/digital/02.jpg" alt="The Adventurer Gift Guide" />
                    </Col>
                    <Col sm={12} md={6}>
                        <img src="/digital/03.jpg" alt="Warm and Cozy Gift Guide" />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={4}>
                        <img src="/digital/04.jpg" alt="Deal of the Day Hoodies" />
                    </Col>
                    <Col sm={12} md={4}>
                        <img src="/digital/05.jpg" alt="Deal of the Day Illustration" />
                    </Col>
                    <Col sm={12} md={4}>
                        <img src="/digital/06.jpg" alt="Deal of the Day T-Shirts" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className="pullQuote">
                            <p>I love drawing stuff! I mean actual stuff; all the miscellaneous items that we use everyday. Elevating and taking time to appreciate the things we use daily makes life brighter. These drawings can turn into patterns or series of curated collections.</p>
                        </div>
                    </Col>
                </Row> 
               
                <Row>
                    <Carousel interval={null}>
                        <Carousel.Item>
                            <img className="carouselItem" src="/digital/10.jpg" alt="Teen Wolf Illustration" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carouselItem" src="/digital/11.jpg" alt="Bloodsucking Babe Illustration" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carouselItem" src="/digital/12.jpg" alt="Witchy Woman Illustration"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carouselItem" src="/digital/13.jpg" alt="Galaxy Gurl Illustration"/>
                        </Carousel.Item>
                    </Carousel>
                </Row>
                <Row>
                    <Col sm={12} md={4}>
                        <img src="/digital/07.gif" alt="Sharpie Animated Gif" />
                    </Col>

                    <Col sm={12} md={4}>
                        <img src="/digital/08.gif" alt="Subaru animated Gif"/>
                    </Col>

                    <Col sm={12} md={4}>
                        <img src="/digital/09.gif" alt="Penny Animated Gif"/>
                    </Col>
                </Row>
            </Container>
            <ProjectNav prevPageName="Apparel" nextPageName="Print" prevProjectLink="/apparel" nextProjectLink="/print" />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
    )
}