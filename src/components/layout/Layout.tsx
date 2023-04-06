import { Component } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../header/Header';

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  }
}

export default Layout;
