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

export default function Print(props) {
    
    const [sideDrawerOpen, setOpen] = React.useState(false)
  
    let sideDrawer, backdrop;

    if (sideDrawerOpen) {
        sideDrawer = <SideDrawer />
        backdrop = <Backdrop backdropClickHandler={() => setOpen(!sideDrawerOpen)}/>
    }

    return (
    <div className="print">
        <Head>
            <title>Print Design</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="Print designs from wedding invitations to business cards, everything you can dream of." />
            <meta name="keywords" content="Graphic Design, Wedding invitations, Wedding announcements Print Design, Business Cards Louisville, Logo design  " />
        </Head>
       <header>
            <NavBar drawerClickHandler={() => setOpen(!sideDrawerOpen)}/> 
                {sideDrawer}
                {backdrop}
            <PageHero pageName="print" pageTitle="Print Design" pageDescription="With so much of life playing out on our screens, print goods are inherently special. Whether they mark a milestone like a wedding, or are simply a beautifully wrapped birthday gift, I love being a part of those little moments; reminding us what makes these tangible goods keepsakes."/>     
        </header>
        <main>
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <img src="/print/01.jpg" alt="Wedding Suite 1" />
                    </Col>

                    <Col sm={12} md={6}>
                        <img src="/print/02.jpg" alt="Wedding Suite 2"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className="pullQuote">
                            <p>Sometimes you need custom hand lettering and other times you need the right font. Either way, I’m here to help you find what makes the perfect invite say I do.</p>
                        </div>
                    </Col>
                </Row>
                 
                <Row>
                <Col xs={12}>
                        <img src="/print/03.jpg" alt="Mint Bar Coaster Design" />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6}>
                        <img src="/print/04.jpg" alt="Road Tripping Gift Wrap" />
                    </Col>

                    <Col sm={12} md={6}>
                        <img src="/print/05.jpg" alt="Junk Food Gift Wrap"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className="pullQuote">
                            <p>What started as a couple punny valentines turned into an entire print it yourself (P.I.Y) greeting card shop. Who doesn’t love some unexpected snail mail, just because?</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={4}>
                        <img src="/print/06.jpg" alt="Gilmore Girls PIY Greeting Card" />
                    </Col>

                    <Col sm={12} md={4}>
                        <img src="/print/07.jpg" alt="Map PIY Greeting Card"/>
                    </Col>

                    <Col sm={12} md={4}>
                        <img src="/print/08.jpg" alt="Matches PIY Greeting Card"/>
                    </Col>
                    
                    <Col sm={12} md={4}>
                        <img src="/print/09.jpg" alt="Father's Day PIY Greeting Card" />
                    </Col>

                    <Col sm={12} md={4}>
                        <img src="/print/10.jpg" alt="Falling for you PIY Greeting Card"/>
                    </Col>

                    <Col sm={12} md={4}>
                        <img src="/print/11.jpg" alt="Franks A Lot PIY Greeting Card"/>
                    </Col>
                </Row>
                <Row>
                    <div className="etsyButton">
                        <h5>Pick up any of these cuties and more at my Etsy shop!</h5>
                        <a href="https://www.etsy.com/shop/Ladymadepress" target="_blank"><button> Shop Now </button></a>
                    </div>
                </Row>
            </Container>
            <ProjectNav prevPageName="Digital" nextPageName="Apparel" prevProjectLink="/digital" nextProjectLink="/apparel" />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
    )
}