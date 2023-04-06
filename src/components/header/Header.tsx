import { Component } from 'react';

import Navigation from '../navigation/Navigation';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header className="header wrapper">
        <p>Page</p>
        <Navigation />
      </header>
    );
  }
}

export default Header;
