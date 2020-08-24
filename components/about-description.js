import React from 'react'
import Container from 'react-bootstrap/Container'
import styles from './about-description.module.css'
import Link from 'next/link'

export default function AboutDescriiption()  {
    return(
        <div className="aboutContainer">
            <Container fluid>
                <div className="aboutDescription">
                    
                    <h4>I FIND JOY IN MAKING FOR OTHERS</h4>
                    
                    <p>Giving gifts is my jam, but giving homemade gifts is even better! Every time I design I want my clients to have the experience of receiving something made especially for them. I enjoy finding the balance between including the personality and preferences of the client while staying true to my own personal style.</p>
                    
                    <h4>MORE ABOUT ME</h4>
                    
                    <p>There isn’t a junk food or Netflix teen drama that I’ll turn down. After spending some time living out west, I made my way back home to the bluegrass state where you will find me hanging in a hammock or cuddling with my fluffy pup Frankie. </p>
                </div>
                <div className="aboutButtonsContainer">
                    <div className="aboutButtonSection">
                        <Link href="/">
                            <a>
                                <button className="whiteButton"> View Resumé</button>
                            </a>
                        </Link>
                        <div  className="ampersand"> <p>&</p> </div>
                        <Link href="/">
                            <a>
                                <button className="whiteButton"> Contact Me</button>
                            </a>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}