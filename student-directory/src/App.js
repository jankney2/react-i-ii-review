import React, { Component } from 'react';

import './App.css';
import Student from './Components/Student';

class App extends Component {
constructor() {
  super()

  this.state= {
    name: "Jacob",
    age: 20, 
    jacobAge: 26,
  }

}
 
  render() {
    return (
      <div className="App">
        
      <Student name={this.state.name} 
      jacobAge={this.state.jacobAge}
      />
      <Student age= {this.state.age}/>


      </div>
    );
  }
}

export default App;
