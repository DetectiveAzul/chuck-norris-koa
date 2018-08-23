import React, { Component } from 'react';
import { Link } from 'react-router';
import { getCelebrityData } from '../utils/chucknorris_api';
import Nav from './Nav';


class CelebrityJokes extends Component {

  constructor() {
    super();
    this.state = { jokes: [] };
  }

  getCelebrityJokes() {
    getCelebrityData()
    .then((jokes) => {
      this.setState({ jokes: jokes.data });
    });
  }

  componentDidMount() {
    this.getCelebrityJokes();
  }

  createJokeElements(jokes) {
    if (!jokes) return;
    return jokes.map((joke, index) => (
      <div className="col-sm-6" key={index}>
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h3 className="panel-title"><span className="btn">#{ joke.id }</span></h3>
          </div>
          <div className="panel-body">
            <p> { joke.joke } </p>
          </div>
        </div>
      </div>
  ))
  }

  render() {

    return (
      <div>
        <Nav />
        <h3 className="text-center">Protected Chuck Norris Celebrity Jokes</h3>
        <hr/>
        {this.createJokeElements(this.state.jokes)}
        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <h2>View Food Jokes</h2>
            <Link className="btn btn-lg btn-success" to='/'>Chuck Norris Food Jokes </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CelebrityJokes;
