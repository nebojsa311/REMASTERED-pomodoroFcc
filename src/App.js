import React from 'react';
import './index.css';
import BreakLabel from './Break.js'
import SessionLabel from './Session.js';
import TimerLabel from './Timer.js';


class App extends React.Component {
  constructor(props){
  super(props)
  //states  
    this.state = {
      break_length: 5,
      session_length: 25,
    }
  // Methods binding .this
  this.incrementMethod = this.incrementMethod.bind(this);
  this.decrementtMethod = this.decrementtMethod.bind(this);
  }

  // Methods
  incrementMethod(event) {
    if(event.currentTarget.id === 'break-increment' && this.state.break_length <= 59) {
      this.setState({ break_length: this.state.break_length + 1 });
    } else if(event.currentTarget.id === 'session-increment' && this.state.session_length <= 59) {
      this.setState({ session_length: this.state.session_length + 1 });
    }
  }

  decrementtMethod(event) {
    if(event.currentTarget.id === 'break-decrement' && this.state.break_length >= 2) {
      this.setState({ break_length: this.state.break_length - 1 });
    } else if(event.currentTarget.id === 'session-decrement' && this.state.session_length >= 2) {
      this.setState({ session_length: this.state.session_length - 1 });
    }
  }

  render(){
    return(
     <div id='container'>
       <BreakLabel break_length={this.state.break_length} increment={this.incrementMethod} decrement={this.decrementtMethod}/>
       <SessionLabel session_length={this.state.session_length} increment={this.incrementMethod} decrement={this.decrementtMethod}/>
       <TimerLabel time={this.state.session_length} />
      </div>
    )
  }
}
export default App;