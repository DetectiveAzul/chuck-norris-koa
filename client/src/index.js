import React from 'react';
import ReactDOM from 'react-dom';
import CelebrityJokes from './components/CelebrityJokes';
import FoodJokes from './components/FoodJokes';
import { Router, Route } from 'react-router';

const Root = () => {
  return (
    <div className="container">
      <Router>
        <Route path="/" component={FoodJokes}/>
        <Route path="/special" component={CelebrityJokes}/>
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
