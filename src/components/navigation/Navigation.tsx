import { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.css';

const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? 'link link_active' : 'link');

type Prop = {
  onChangeTitle: (title: string) => void;
};

class Navigation extends Component<Prop> {
  render() {
    const { onChangeTitle } = this.props;

    return (
      <nav className="nav">
        <NavLink to="/" className={setActive} onClick={() => onChangeTitle('Home')}>
          Home
        </NavLink>
        <NavLink to="about" className={setActive} onClick={() => onChangeTitle('About')}>
          About
        </NavLink>
      </nav>
    );
  }
}

export default Navigation;
