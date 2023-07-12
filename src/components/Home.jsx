import React from 'react'
import Container from 'react-bootstrap/Container';
import './home.css'
import Button from 'react-bootstrap/Button';
import appImage from '../media/appImage.png';

const Home = () => {
  return (
    <>
        <div className='homeBody' id='home'>
          <br />
          <br />
          <br />
          <Container>

          <h1 className='mainHeading'>Every Problem has a Solution, <br/> Just ask a Question and Find it!</h1>
          <div className="text-center">
          <Button className='headerButton' variant="light" size='lg' href="#choices">Ask a Question...</Button>
          </div>

          </Container>

          <div className="text-center">
          <img src={appImage} className='appImage img-fluid' alt="application image" />
          </div>
        </div>
    </>
    
  )
}

export default Home
