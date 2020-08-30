import React from 'react'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import styles from './project-nav.module.css'

export default function ProjectNav (props) {
    return (
        <div className="projectNav">
            <Container fluid>
                <Link href={props.prevProjectLink}>
                <a>
                    <button className="featureButton"> 
                        <i className="arrow left"></i> Previous Project 
                    </button>
                </a>
                    
                </Link>
                <Link href={props.nextProjectLink}>
                <a>
                    <button className="featureButton"> 
                        Next Project <i className="arrow right"></i> 
                    </button>
                </a>
                    
                </Link>
            </Container>
        </div>
    )
}