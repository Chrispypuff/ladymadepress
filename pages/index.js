import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Hero from '../components/hero'
import Features from '../components/features'
import AboutHero from '../components/about-hero'
import AboutDescription from '../components/about-description'
import NavBar from '../components/nav-bar'
import SideDrawer from '../components/SideDrawer/sideDrawer'
import Backdrop from '../components/backdrop/backdrop'
import Footer from '../components/footer'


export default function Home(props) {
  const [sideDrawerOpen, setOpen] = React.useState(false)
  
  let sideDrawer, backdrop;

  if (sideDrawerOpen) {
    sideDrawer = <SideDrawer  />
    backdrop = <Backdrop backdropClickHandler={() => setOpen(!sideDrawerOpen)}/>
  }
  
  return (
    <div className="index">
      <Head>
        <title>Lady Made Press</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <NavBar drawerClickHandler={() => setOpen(!sideDrawerOpen)}/> 
        {sideDrawer}
        {backdrop}
        <Hero />
        
      </header>

      <main>
        <Features />
        <AboutHero  />
        <AboutDescription />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
