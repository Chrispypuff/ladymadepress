import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './about-description.module.css'
import Link from 'next/link'

export default function AboutDescription()  {
    return(
        <div className="aboutContainer">
            <Container fluid>
                 <Row>
                 <div className="aboutBadge">
                        <img src="/about-badge.svg" />
                    </div>
                    
                 </Row>   
                   
                    
                <Row>
                <Col sm={12} md={6}>
                        <img  src="/about-photo-02.jpg" />
                    </Col>
                        
                    <Col sm={12} md={6}>
                        <div className="aboutDescription">
                            
                            <h4>I FIND JOY IN MAKING FOR OTHERS</h4>
                            
                            <p>Giving gifts is my jam, but giving homemade gifts is even better! Every time I design I want my clients to have the experience of receiving something made especially for them. I enjoy finding the balance between including the personality and preferences of the client while staying true to my own personal style.</p>
                            
                            <h4>MORE ABOUT ME</h4>
                            
                            <p>There isn’t a junk food or Netflix teen drama that I’ll turn down. After spending some time living out west, I made my way back home to the bluegrass state where you will find me hanging in a hammock or cuddling with my fluffy pup Frankie. </p>
                        </div>
                        <div className="aboutButtonsContainer">
                            <div className="aboutButtonSection">
                                <Link href="/resume.pdf">
                                    <a>
                                        <button className="whiteButton"> Resumé</button>
                                    </a>
                                </Link>
                                <div  className="ampersand"> <p>&</p> </div>
                                
                                <a href="mailto:esposito.brittany@gmail.com">
                                    <button className="whiteButton"> Contact</button>
                                </a>
                                
                            </div>
                        </div>
                        </Col>

                </Row>
                    
               

               
                
            </Container>
        </div>
    )
}