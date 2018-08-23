import React from 'react';
import ReactDOM from 'react-dom';
import CelebrityJokes from './components/CelebrityJokes';
import FoodJokes from './components/FoodJokes';
import Nav from './components/Nav';
import { Router } from '@reach/router';

const Root = () => {
  return (
    <div className="container">
      <Nav />
      <Router>
        <FoodJokes path="/" />
        <CelebrityJokes path="/special" />
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
