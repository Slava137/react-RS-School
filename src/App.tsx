import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import NotFoundPage from './pages/notFound/NotFound';
import Layout from './components/layout/Layout';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
