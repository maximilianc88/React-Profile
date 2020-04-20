import React, { Component } from '../../../node_modules/react';
import NavBar from '../Navbar/NavBar';

class Header extends Component {
  render() {

    return (
            <div>
              <h1 className='text-center p-5'>Maximillian Cartwright</h1>
             <NavBar />
             </div>
    );
  }
}

export default Header;