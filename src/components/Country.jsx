import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faHome, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';


const Country = () => {
    return(
        <div className="footer-country container">
            <FontAwesomeIcon icon="fa-solid fa-flag-usa" className="footer-country__icon"/>
            <a className="footer-country__text" href="#">USA - change country</a>
        </div>
    )
}

export default Country;