import { Component } from 'react';

import Navigation from '../navigation/Navigation';
import './header.css';

type State = {
  title: string;
};

class Header extends Component<{}, State> {
  state = {
    title: 'Home',
  };

  handleChangeTitle = (title: string) => {
    this.setState({ title });
  };

  render() {
    const { title } = this.state;

    return (
      <header className="header">
        <p>{title}</p>
        <Navigation onChangeTitle={this.handleChangeTitle} />
      </header>
    );
  }
}

export default Header;
