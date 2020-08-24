import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'




export default function ApparelHero() {
    return(
        <div className="apparelHero">
            <Jumbotron >
                <Container fluid >
                    <h1 className="heroH1"> Apparel Design</h1>
                </Container>
                <div className="descriptionBox">
                    <h3>Thinking about how ink sits on fabric, or how shapes need to be layered for a particular garment make the final design stronger. The technical boundaries of apparel design help me hone my skills and improve with each project.</h3>
                </div>  
            </Jumbotron>
        </div>

    );
}