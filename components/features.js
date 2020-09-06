import React from 'react'
import styles from './features.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'

export default function Features() {
    return(
        <div className="featureContainer">
            <Container fluid="sm xs">
                <Row>
                    <Col sm={12} md={4}>
                        <div className="featureIcon">
                            <img src="/apparel.svg" alt="Apparel Design Icon"/>
                        </div>
                        <div className="featureDescription">
                            <h4> Apparel </h4>
                            <p>The best thing about apparel design is that it gets to live in the real world. Whether its screen print or embroidery there are technical considerations to make, allowing for plenty of creative problem-solving.</p>
                        </div>
                        <Link href="/apparel">
                            <a><button className="featureButton"> View More  <i className="arrow right"></i> </button></a>
                        </Link>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className="featureIcon">
                            <img src="/digital.svg" alt="Digital Design Icon"/>
                        </div>
                        <div className="featureDescription">
                            <h4>Digital</h4>
                            <p>With everything at our fingertips, it’s exciting to explore what makes us stop scrolling and take a moment. Digital designs have so much flexibility in how people interact and relate to them. They aren’t just stand-alone pieces, but a curated collection. </p>
                        </div>
                        <Link href="/digital">
                            <a><button className="featureButton"> View More <i className="arrow right"></i></button></a>
                        </Link>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className="featureIcon">
                            <img src="/print.svg" alt="Print Design Icon"/>
                        </div>
                        <div className="featureDescription">
                            <h4>Print</h4>
                            <p>From stickers to wedding suites, print design is not just about the image. It’s about the paper texture, stock, print method, and envelopes that match. Each piece comes together to create a complete package. Tied up with the perfect bow, of course!</p>
                        </div>
                        <Link href="/print">
                            <a><button className="featureButton"> View More <i className="arrow right"></i></button></a>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}