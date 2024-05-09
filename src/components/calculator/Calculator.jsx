import React, { Component } from 'react';
import './calculator.css';
import ResultComponent from './Result';
import KeyPadComponent from './KeyPad';

class Calculator extends Component {
  state = {
    result: ""
  }

  onClick = button => {
    if(button === "=") {
      this.calculate();
    } else if(button === "C") {
      this.reset();
    } else if(button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  };

  calculate = () => {
    let checkResult = '';
    if(this.state.result.includes('--')) {
      checkResult = this.state.result.replace('--', '+');
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        result: (eval(checkResult) || "") + ""
      });
    } catch(e) {
      this.setState({
        result: "error"
      });
    }
  };

  reset = () => {
    this.setState({
      result: ""
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };

  render() {
    return (
      <div className="container2">
        <div className="left-side">
          <h1>For a given product, in 2011, 112,965 items were sold for a total value of <br/>
          180,744. How much does a unit of this product cost?</h1>
          <input placeholder='type your answer' type='text' required />
        </div>
        <div className="right-side">
          <div className="calculator-body">
            <h2 className='h2'>Simple Calculator</h2>
            <ResultComponent result={this.state.result} />
            <KeyPadComponent onClick={this.onClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
