import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";


function PlayButton(props) {
    return(
        <div>
            <button id="start_stop">
                <FontAwesomeIcon icon={faPlay} />
            </button>
        </div>
    )
}

export default PlayButton;
