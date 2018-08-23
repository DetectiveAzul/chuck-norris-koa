import React from 'react';
import ReactDOM from 'react-dom';
import CelebrityJokes from './components/CelebrityJokes';
import FoodJokes from './components/FoodJokes';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

const Root = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Route path="/" component={FoodJokes}/>
          <Route path="/special" component={CelebrityJokes}/>
        </div>
      </BrowserRouter>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
