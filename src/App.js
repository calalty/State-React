import React, {Component} from 'react'
import './App.css';
import { render } from '@testing-library/react';
import Person from './Components/Person'
class App extends Component {
  state = {
    numbers: [1, 2, 3, 4, 5, 6, 7],
    currentNumber: ""
  }
  saveNumberHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      currentNumber: event.target.value
    })
  }

  /**
   * log will display the current and most up to date state.
   * updating the currentNumber to whatver event.target.value is
   */
  addNumberHandler = () => {
    this.setState({
      numbers: [...this.state.numbers, this.state.currentNumber],
      currentNumber: ""
    })
  }
  /**
   * ... spread operator - is taking value and adding it on 
   */
  render() {
    const eachNumber = this.state.numbers.map((number, index) => {
      return <li key={index}>{number}</li>
    })
    return (
      <div className="App" >
        <ul>
          {eachNumber}
        </ul>
        <input type='number' onChange={this.saveNumberHandler} value={this.state.currentNumber} />
        <button onClick={this.addNumberHandler}>Add numbers with this button</button>
      </div>
    );
  }
}


export default App
