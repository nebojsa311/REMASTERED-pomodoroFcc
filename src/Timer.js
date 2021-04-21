import { faPlay, faRecycle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function TimerLabel(props) {
    return(
        <div className='timer-control'>
            <div id='timer-label'>Session</div>
            <div id='time-left'>{props.time}</div>
            <button id='start_stop'><FontAwesomeIcon icon={faPlay}/></button>
            <button id='reset'><FontAwesomeIcon icon={faRecycle}/></button>
        </div>
    )
}

export default TimerLabel;