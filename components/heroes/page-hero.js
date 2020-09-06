import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import styles from './page-heroes.module.css'




export default function PageHero(props) {
    return(
        <div className={props.pageName}>
            <Jumbotron >
                <Container fluid >
                    <h1 className="heroH1 pageHero"> {props.pageTitle}</h1>
                </Container>
                <div className="descriptionBox">
                    <h3>{props.pageDescription}</h3>
                </div>
            </Jumbotron>
            
        </div>

    );
}