import { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends Component {
  render() {
    return (
      <main>
        <h1>404 page</h1>
        <Link to="/">Home</Link>
      </main>
    );
  }
}

export default NotFoundPage;
