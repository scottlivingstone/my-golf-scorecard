import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Scorecard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h1>My Golf scorecard</h1>
        <p>Front 9</p>
        <Hole hole="1" par="3" />
        <Hole hole="2" par="4" />
        <Hole hole="3" par="4" />
        <Hole hole="4" par="3" />
        <Hole hole="5" par="5" />
        <Hole hole="6" par="3" />
        <Hole hole="7" par="4" />
        <Hole hole="8" par="4" />
        <Hole hole="9" par="3" />
      </div>
    );
  }
}

class Hole extends React.Component {
  render() {
    return(
      <div className="align-columns">
        <div className="scorecard-column">
          <div className="score-box">
            {this.props.hole}
          </div>
          <div className="score-box">
          {this.props.par}
          </div>
          <div>
            <ScoreBox />
          </div>
        </div>
      </div>
    );
  }
}

class ScoreBox extends React.Component {
  render() {
    return(
      <input type="text" className="score-box" />
    );
  }
}

ReactDOM.render(
  <Scorecard />,
  document.getElementById('root')
);
