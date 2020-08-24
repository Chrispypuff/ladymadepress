import React from 'react'
import styles from './side-drawer.module.css'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'


export default function DrawerToggleButton (props) {
    return (
        <button className="navToggleButton" onClick={props.click}>
            <div className="navToggle">
                <span className="burgerBar"></span>
                <span className="burgerBar"></span>
                <span className="burgerBar"></span>
            </div>
        </button> 
    )
}
    
