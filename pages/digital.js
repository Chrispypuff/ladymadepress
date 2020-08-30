import React from 'react'
import Head from 'next/head'
import NavBar from '../components/nav-bar'
import PageHero from '../components/heroes/page-hero'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../styles/apparel.css';
import Footer from '../components/footer'
import ProjectNav from '../components/ProjectNav/project-nav'

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
                    <Col sm={12} md={4}>
                        <img src="public/digital/01.gif" alt="Teamwork Tee" />
                    </Col>

                    <Col sm={12} md={4}>
                        <img src="public/digital/02.gif" alt="Sofly Shirt Tag"/>
                    </Col>

                    <Col sm={12} md={4}>
                        <img src="public/digital/03.gif" alt="Mint Hat Patch"/>
                    </Col>    
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className="pullQuote">
                            <p>From printed garment tags to embroidered patches, each project is an opportunity to collaborate with local brands to make something everyone is proud of.</p>
                        </div>
                    </Col>
                </Row>
                 {/* UW Tee Designs Desktop*/}
                <Row hidden ="sm xs">
                <Col xs={12}>
                        <img src="public/apparel/04.jpg" alt="UW Tee Design 01" />
                    </Col>
                </Row>
                {/* UW Tee Designs Mobile*/}
                <Row visible="sm xs">
                    <Col sm={12} md={4}>
                        <img src="public/apparel/04.jpg" alt="UW Tee Design 01" />
                    </Col>
                    <Col sm={12} md={4}>
                        <img src="public/apparel/05.jpg" alt="UW Tee Design 02" />
                    </Col>
                    <Col sm={12} md={4}>
                        <img src="public/apparel/06.jpg" alt="UW Tee Design 03" />
                    </Col>
                    <Col sm={12} md={4}>
                        <img src="public/apparel/07.jpg" alt="UW Tee Design 04" />
                    </Col>
                    <Col sm={12} md={4}>
                        <img src="public/apparel/08.jpg" alt="UW Tee Design 05" />
                    </Col>
                    <Col sm={12} md={4}>
                        <img src="public/apparel/09.jpg" alt="UW Tee Design 06" />
                    </Col>
                </Row>
                <Row>
                <Col sm={12} md={6}>
                        <img src="public/apparel/10.jpg" alt="Floral Tee" />
                    </Col>

                    <Col sm={12} md={6}>
                        <img src="public/apparel/11.jpg" alt="Go Pokes Hoodie"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className="pullQuote">
                            <p>I love the flexibility of designing in a simple way that translates from a ball cap to official letterhead.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={4}>
                        <img src="public/apparel/12.jpg" alt="American Hippie Donkey and Elephant Design" />
                    </Col>

                    <Col sm={12} md={4}>
                        <img src="public/apparel/13.jpg" alt="American Hippie Peace Sign Design"/>
                    </Col>

                    <Col sm={12} md={4}>
                        <img src="public/apparel/14.jpg" alt="American Hippie typography Design"/>
                    </Col>
                </Row>
            </Container>
            <ProjectNav prevProjectLink="/apparel" nextProjectLink="/print" />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
    )
}