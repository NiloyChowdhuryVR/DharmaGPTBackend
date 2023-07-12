import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function ColorSchemesExample(props) {

  return (
    <>
      <Navbar data-bs-theme='dark' fixed='top' className='staticNav'>
        <Container className='h-1000 d-flex align-items-center justify-content-center'>
         <Link to='/' className='navBrand '><h4>{props.title}</h4></Link> 
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;