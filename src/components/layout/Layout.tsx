import { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class Layout extends Component {
  render() {
    return (
      <>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </header>
        <Outlet />
      </>
    );
  }
}

export default Layout;
