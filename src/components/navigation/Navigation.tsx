import { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.css';

const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? 'link link_active' : 'link');

class Navigation extends Component {
  render() {
    return (
      <nav className="nav">
        <NavLink to="/" className={setActive}>
          Home
        </NavLink>
        <NavLink to="about" className={setActive}>
          About
        </NavLink>
      </nav>
    );
  }
}

export default Navigation;
