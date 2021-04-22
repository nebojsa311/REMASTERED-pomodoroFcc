import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecycle } from "@fortawesome/free-solid-svg-icons";

function ResetButton(props) {
    return(
        <button id="reset" onClick={props.reset}>
            <FontAwesomeIcon icon={faRecycle} />
        </button>
    )
}

export default ResetButton;
    