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
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&family=Vollkorn:wght@800&display=swap" rel="stylesheet" />        <link rel="icon" href="/favicon.ico" />
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
