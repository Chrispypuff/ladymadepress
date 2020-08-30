import React from 'react'
import Link from 'next/link'
import styles from './side-drawer.module.css'

export default function SideDrawer (props) {
    
    let drawerClasses = ['sideDrawer'];
    if (props.sideDrawerOpen = true) {
        drawerClasses = ['sideDrawer open'];
    }
    
    return(
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
    )
}

