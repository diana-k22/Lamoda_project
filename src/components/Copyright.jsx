import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faHome, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

const Copyright = () => {
    return (
        <div className="copy container"> 
            <FontAwesomeIcon icon="fa-solid fa-copyright"  className="copy-icon"/>
            <span className="copy-text">2020</span>
        </div>
            
       
    )
}

export default Copyright;