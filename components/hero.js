import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import styles from './hero.module.css'



export default function Hero() {
    return(
        <div className="hero">
            <Jumbotron >
                <Container fluid >
                    <h1 className="heroH1">Smart. <br/> Thoughtful. <br/> Funny.</h1>
                </Container>
                <div className="descriptionBox">
                    <h3>A Project isn't finished until it makes you smile. </h3>
                </div> 
            </Jumbotron>
        </div>

    );
}

