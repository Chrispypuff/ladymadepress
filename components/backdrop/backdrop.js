import React from 'react'
import styles from './backdrop.module.css'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'

export default function Backdrop (props) {
    return (
        <div className="backdrop" onClick={props.backdropClickHandler}/>
    )
}