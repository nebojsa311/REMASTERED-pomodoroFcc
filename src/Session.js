import React from 'react';
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function SessionLabel(props) {
    return(
        <div className='length-control'>
            <div id='session-label'>Session length</div>
            <button id='session-increment' onClick={props.increment}><FontAwesomeIcon icon={faArrowUp} size='2x'/></button>
            <div id='session-length'>{props.session_length}</div>
            <button id='session-decrement' onClick={props.decrement}><FontAwesomeIcon icon={faArrowDown} size='2x'/></button>
        </div>
    )
}

export default SessionLabel