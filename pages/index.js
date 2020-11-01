import React from 'react'
import Head from 'next/head'
import Hero from '../components/hero'
import Features from '../components/features'
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
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&family=Vollkorn:wght@800&display=swap" rel="stylesheet" />        
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Lady Made Press offers full service graphic design to help with your business need, custom apparel, wedding announcements, and so much more. Contact me today!" />
        <meta name="keywords" content="Graphic Design Louisville, Woman owned business, logo design louisville, wedding announcements, female designer, apparel designer, print designer, digital designer, social media manager" />
      </Head>

      <header>
        <NavBar drawerClickHandler={() => setOpen(!sideDrawerOpen)}/> 
        {sideDrawer}
        {backdrop}
        <Hero />
        
      </header>

      <main>
        <Features />
        <AboutDescription />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
