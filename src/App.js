import React, { Component } from "react";
import "./App.css";
import 'tachyons';
import Textbox from './Textbox.js';

class App extends Component {

  constructor(){
    super();
    this.state = {
      number : ''
    };
   }
  handleclick = (event) => {
    
      this.setState({number: event.target.value});
     
  }

    render(){
         return (

            <div className="App">
              
                   <Textbox  handleclick = {this.handleclick} number = {this.state.number} />
            </div>
  
  )
    }
}

export default App;
