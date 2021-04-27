import React from "react";
import PlayButton from "./PlayButton";
import ResetButton from "./ResetButton";

function TimerLabel(props) {
  return (
    <div className="timer-control">
      <div id="timer-label">{props.label}</div>
      <div id="time-left">
        {props.switcher === false && props.time < 10
          ? "0" + props.time
          : props.switcher === true && props.break < 10
          ? "0" + props.break
          : props.switcher === false
          ? props.time
          : props.break}
        :{props.seconds < 10 ? "0" + props.seconds : props.seconds}
      </div>
      <div id='button1'>
      <PlayButton/>
      </div>
      <div id='button2'>
      <ResetButton reset={props.reset}/>
      </div>
    </div>
  );
}

export default TimerLabel;
