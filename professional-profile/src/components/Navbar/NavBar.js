import React from 'react';
import { Link } from 'react-router-dom';
import Row from '../Row';
import Container from '../Container';
import './styles.css'

function Navbar() {
  return (
    <Container className='m-2 p-0'>
    <Row className='d-flex text-center bg-light'>

      <div className='col-md-4 px-0'>
            <Link
              to="/"
              className= {
                window.location.pathname === '/' ||
                window.location.pathname === '/about'
                  ? 'nav-link active p-0 m-0'
                  : 'nav-link p-0 m-0'
              }
            >
              <p id='nav1' className='h3 py-2 px-2 m-0 '>About Me</p>
            </Link>
            </div>
            <div className='col-md-4 px-0'>
            <Link
              to="/projectz"
              className= {
                window.location.pathname === '/projectz'
                  ? 'nav-link active p-0 m-0'
                  : 'nav-link p-0 m-0'
              }
            >
              <p id='nav2' className='h3 py-2 px-2 m-0 '>Projectz</p>
            </Link>
            </div>
            <div className='col-md-4 px-0'>
            <Link
              to="/contact"
              className= {
                window.location.pathname === '/contact'
                  ? 'nav-link active p-0 m-0'
                  : 'nav-link p-0 m-0'
              }
            >
              <p id='nav3' className='h3 py-2 px-2 m-0'>Contact</p>
            </Link>
            </div>
            </Row>
    </Container>
  );
}
export default Navbar;