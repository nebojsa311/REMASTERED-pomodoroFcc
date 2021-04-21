import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function BreakLabel(props) {
    return(
        <div className='length-control'>
            <div id='break-label'>Break length</div>
            <div id='break-length'>{props.break_length}</div>
            <button id='break-increment' onClick={props.increment}><FontAwesomeIcon icon={faArrowUp} /></button>
            <button id='break-decrement' onClick={props.decrement}><FontAwesomeIcon icon={faArrowDown} /></button>
        </div>
    )
}

export default BreakLabel