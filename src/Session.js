import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function SessionLabel(props) {
    return(
        <div className='length-control'>
            <div id='session-label'>Session length</div>
            <button id='session-increment' onClick={props.increment}><FontAwesomeIcon icon={faArrowUp} /></button>
            <button id='session-decrement' onClick={props.decrement}><FontAwesomeIcon icon={faArrowDown} /></button>
            <div id='session-length'>{props.session_length}</div>
        </div>
    )
}

export default SessionLabel