import React from "react";
import "./index.css";
import BreakLabel from "./Break.js";
import SessionLabel from "./Session.js";
import TimerLabel from "./Timer.js";

let counterGo = null;

class App extends React.Component {
  constructor(props){ 
    super(props);
    //states
    this.state = {
      break_length: 5,
      break_holder: 0,
      session_length: 25,
      session_holder: 0,
      seconds: 0,
      break: false,
      running: true,
      label: 'Session'
    };
    // Methods binding .this
    this.incrementMethod = this.incrementMethod.bind(this);
    this.decrementMethod = this.decrementMethod.bind(this);
    this.resetMethod = this.resetMethod.bind(this);
    this.runningMethod = this.runningMethod.bind(this);
  }

  // Methods
  incrementMethod(event) {
    if (
      event.currentTarget.id === "break-increment" &&
      this.state.break_length < 60
    ) {
      this.setState({ break_length: this.state.break_length + 1 });
    } else if (
      event.currentTarget.id === "session-increment" &&
      this.state.session_length < 60
    ) {
      this.setState({ session_length: this.state.session_length + 1 });
    }
  }

  decrementMethod(event) {
    if (
      event.currentTarget.id === "break-decrement" &&
      this.state.break_length > 1
    ) {
      this.setState({ break_length: this.state.break_length - 1 });
    } else if (
      event.currentTarget.id === "session-decrement" &&
      this.state.session_length > 1
    ) {
      this.setState({ session_length: this.state.session_length - 1 });
    }
  }

  runningMethod(event) {
    // session in process
      if (this.state.break === false && this.state.running === false) {
      if (this.state.session_length > 0) {
        if (this.state.seconds === 0) {
          this.setState({
            session_length: this.state.session_length - 1,
            seconds: 59,
            session_holder: this.state.session_holder + 1,
          });
        } else if (this.state.seconds > 0) {
          this.setState({ seconds: this.state.seconds - 1 });
        }
      } else if (this.state.session_length === 0 && this.state.seconds > 0) {
        this.setState({ seconds: this.state.seconds - 1 });
      } else {
        this.setState({
          break: true,
          session_length: this.state.session_holder,
          break_holder: 0,
          label: 'Break',
        });
      }
      // break in process
    } else if (this.state.break === true && this.state.running === false) {
      this.setState({ label: 'Break time' })
      if (this.state.break_length > 0) {
        if (this.state.seconds === 0) {
          this.setState({
            break_length: this.state.break_length - 1,
            seconds: 59,
            break_holder: this.state.break_holder + 1,
          });
        } else if (this.state.seconds > 0) {
          this.setState({ seconds: this.state.seconds - 1 });
        }
      } else if (this.state.break_length === 0 && this.state.seconds > 0) {
        this.setState({ seconds: this.state.seconds - 1 });
      } else {
        this.setState({
          break: false,
          break_length: this.state.break_holder,
          session_holder: 0,
          label: 'Session time',
        });
      }
    }
  
  }

  resetMethod(event) {
    this.setState({
      break_length: 5,
      session_length: 25,
      seconds: 0,
      break: false,
      running: true,
      label: 'Session'
    });
    clearInterval(counterGo);
  }

  componentDidMount() {
    document
      .getElementById("start_stop")
      .addEventListener("click", () => {
        if(this.state.running === true) {
          counterGo = setInterval(this.runningMethod, 1000);
          this.setState({ running: false });
          return;
        } else if(this.state.running === false){
          clearInterval(counterGo);
          this.setState({ running: true });
          return;
        }
      }
        
      );
  }

  render() {
    return (
      <div id="container">
        <BreakLabel
          break_length={this.state.break_length}
          increment={this.incrementMethod}
          decrement={this.decrementMethod}
        />
        <SessionLabel
          session_length={this.state.session_length}
          increment={this.incrementMethod}
          decrement={this.decrementMethod}
        />
        <TimerLabel
          time={this.state.session_length}
          break={this.state.break_length}
          seconds={this.state.seconds}
          switcher={this.state.break}
          reset={this.resetMethod}
          label={this.state.label}
        />
      </div>
    );
  }
}
export default App;
