import React from 'react'
import styles from '../components/footer.module.css'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'


export default function Footer (){
    return (
        <Container fluid>
          <div className="footerBritt">
            <h4>Brittany Esposito</h4>
            <h5> Lady Made Press</h5>
          </div>
          <div className="footerSocial">

            <div className="socialItem">
              <h5 className="linkTitle">Contact</h5>
                <a  href="mailto:esposito.brittany@gmail.com" className="socialLink">
                  esposito.brittany@gmail.com
                </a>
              </div>

            <div className="socialItem">
              <h5 className="linkTitle">Social</h5>
                <a href="https://www.instagram.com/lady_made_press/" className="socialLink">
                  Instagram Page
                </a>
            </div>

            <div className="socialItem">
              <h5 className="linkTitle">Shop</h5>
                <a href="https://www.etsy.com/shop/Ladymadepress" className="socialLink">
                  Etsy Shop
                </a>
            </div>
           

          </div>
        </Container>
    )
}
