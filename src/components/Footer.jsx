import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <footer>
        <Container className='footerContainer'>
            <Row >
                <Col xs={12} md={4} >
                    <h5><strong>DharmaGPT: Uniting Seekers, Embracing Wisdom</strong></h5>
                    <h6>Discover spiritual insights from diverse traditions on our online platform. Ask questions and receive personalized answers rooted in sacred scriptures. We foster interfaith dialogue and celebrate the unity of all seekers. Join us in the pursuit of spiritual growth and enlightenment. Your journey starts here at DharmaGPT.</h6>
                </Col>
                <Col xs={12} md={4} >
                    <h5>Navigation</h5>
                    <ul className='list-unstyled'>
                        <li><Link to="/gita" className='text-decoration-none'><h6>Gita</h6></Link></li>
                        <li><Link to="/quran" className='text-decoration-none'><h6>Quran</h6></Link></li>
                        <li><Link to="/bible" className='text-decoration-none'><h6>Bible</h6></Link></li>
                        <li><Link to="/tripitaka" className='text-decoration-none'><h6>Tripitaka</h6></Link></li>
                        
                    </ul>
                </Col>
                <Col xs={12} md={4} >
                    <h3>DharmaGPT.</h3>
                    <h6>-"Unveiling Truth, Uniting Faiths: DharmaGPT, Where Sacred Wisdom Converges"</h6>
                </Col>
            </Row>
            <hr />
            <div className="copyright">© 2023 Niloy Chowdhury. All rights reserved.</div>
        </Container>
      </footer>
    </>
  )
}

export default Footer
