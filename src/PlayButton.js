import React from 'react';
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";


function PlayButton(props) {
    return(
        <div className='buttons'>
            <button id="start_stop">
                <FontAwesomeIcon icon={faPlay} size='2x'/>
            </button>
        </div>
    )
}

export default PlayButton;
