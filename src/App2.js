import React, { Component } from 'react';
import './app2.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
    this.decreaseValue = this.decreaseValue.bind(this);
    this.increaseValue = this.increaseValue.bind(this);
  }

  decreaseValue() {
    this.setState(prevState => {
      return {
        value: prevState.value - 1
      }
    });
  }


  increaseValue() {
    this.setState(prevState => {
      return {
        value: prevState.value + 1
      }
    });
  }

  render() {
    let classColor = 'value ';
    if (this.state.value < 0) {
      classColor += 'value--negative';
    } else if (this.state.value > 0) {
      classColor += 'value--positive';
    }

    return (
      <div className="values-container">
        <button onClick={this.decreaseValue} className="button">-</button>
        <span className={classColor}>{this.state.value}</span>
        <button onClick={this.increaseValue} className="button">+</button>
      </div>
    );
  }
}

export default App;
