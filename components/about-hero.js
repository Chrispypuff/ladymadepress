import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import styles from './about-hero.module.css'

export default function AboutHero() {
    return (
        <div className="aboutHero">
            <Jumbotron fluid>
                <Container  fluid>
                    <div className="aboutOffset">
                        <h2>The right <br/> lady for <br/>the job </h2>    
                    </div>
                </Container>
            </Jumbotron>
        </div>
    );
}

