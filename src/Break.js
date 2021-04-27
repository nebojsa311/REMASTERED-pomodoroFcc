import React from 'react';
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function BreakLabel(props) {
    return(
        <div className='length-control'>
            <div id='break-label'>Break length</div>
            <button id='break-increment' onClick={props.increment}><FontAwesomeIcon icon={faArrowUp} size='2x' /></button>
            <div id='break-length'>{props.break_length}</div>
            <button id='break-decrement' onClick={props.decrement}><FontAwesomeIcon icon={faArrowDown} size='2x' /></button>
        </div>
    )
}

export default BreakLabel