import { Component } from 'react';

export class Feedback extends Component {
  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <ul>
          <li>
            <button onClick={this.addGoodFeedback}>Good</button>
          </li>
          <li>
            <button onClick={this.addNeutralFeedback}>Neutral</button>
          </li>
          <li>
            <button onClick={this.addBadFeedback}>Bad</button>
          </li>
        </ul>
      </div>
    );
  }
}
