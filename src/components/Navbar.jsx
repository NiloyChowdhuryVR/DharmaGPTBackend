import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
    
    const [navbar,setNavbar] = useState(false);

    //Function To Change Class of Navbar on scroll
    const changeNavbarColor = ()=>{
        if(window.scrollY>=40){
            setNavbar(true);
        }
        else{
            setNavbar(false);
        }
    }

    window.addEventListener('scroll',changeNavbarColor);

  return (
    <>
      <Navbar data-bs-theme={navbar?'dark':'dark'} sticky={navbar?'top':null} className={navbar?'navbarBackground':'navbarBackground active'}>
        <Container >
          <Navbar.Brand href="#home">DharmaGPT.</Navbar.Brand>
          <Nav className="me-left">
            <Nav.Link href="#randoms" className='navOptions'>Random</Nav.Link>
            <Nav.Link href="#about" className='navOptions'>About</Nav.Link>
            <Nav.Link href="#contact" className='navOptions'>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;