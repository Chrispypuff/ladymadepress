import React from 'react'
import styles from './nav-bar.module.css'
import Container from 'react-bootstrap/Container'
import Link from 'next/link'
import DrawerToggleButton from './SideDrawer/drawer-toggle'

export default function NavBar (props) {
    return (
        <div className="navBar">
            <Container fluid>
                <div className="navLogo logoDesktop">
                    <Link href="/">
                        <img src="/logo-desktop.svg" alt="Lady Made Press logo"/>    
                    </Link>
                </div>
                <div className="navLogo logoMobile">
                    <Link href="/">
                        <img src="/logo-mobile.svg" alt="Lady Made Press logo"/>    
                    </Link>
                </div>
                <div className="navMenu">
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
            </Container>
        </div>
    )
}