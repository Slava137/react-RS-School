import { Component } from 'react';
import { Link } from 'react-router-dom';

import './notFound.css';

class NotFoundPage extends Component {
  render() {
    return (
      <main className="not-found">
        <h1>404 page</h1>
        <p>Oops! Page not found.</p>
        <p>You may have made a mistake with the page address, please check the requested page</p>
        <Link to="/" className="home-button">
          Go Home
        </Link>
      </main>
    );
  }
}

export default NotFoundPage;
