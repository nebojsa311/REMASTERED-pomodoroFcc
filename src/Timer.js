import React from "react";
import PlayButton from "./PlayButton";
import ResetButton from "./ResetButton";

function TimerLabel(props) {
  return (
    <div className="timer-control">
      <div id="timer-label">Session</div>
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
      <PlayButton run={props.run}/>
      <ResetButton reset={props.reset}/>
    </div>
  );
}

export default TimerLabel;
