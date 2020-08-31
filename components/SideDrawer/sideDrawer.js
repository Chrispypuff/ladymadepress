import React from 'react'
import Link from 'next/link'
import styles from './side-drawer.module.css'
import Fade from 'react-bootstrap/Fade'

export default function SideDrawer (props) {

    let [sideDrawerOpen, setOpen] = React.useState(false)
        
    let drawerClasses = ['sideDrawer'];
    if (sideDrawerOpen = true) {
        drawerClasses = ['sideDrawer open'];
    }
    
    return(
        <Fade in={drawerClasses}>
            <nav className={drawerClasses}>
                    <ul className="sideUL">
                        <li>
                            <Link href="/apparel">
                                <a className="navItem">Apparel</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/digital">
                                <a className="navItem">Digital</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/print">
                                <a className="navItem">Print</a>
                            </Link>
                        </li>
                    </ul>
            </nav>
        </Fade>
    )
}

