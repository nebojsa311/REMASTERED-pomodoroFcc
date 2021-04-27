import React from 'react';
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecycle } from "@fortawesome/free-solid-svg-icons";

function ResetButton(props) {
    return(
        <button id="reset" onClick={props.reset}>
            <FontAwesomeIcon icon={faRecycle} size='2x'/>
        </button>
    )
}

export default ResetButton;
    