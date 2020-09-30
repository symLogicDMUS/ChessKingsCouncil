/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import {Link} from "react-router-dom";
import "../NavBar.css";
import "./NewGameLink.css";

export function NewGameLink ({iconLabelPosLeft}) {  
    return (
        <Link to="/NewGame">
            <div className="new-game-link">
                <img src="/Images/Navbar/new-game-invert.svg" className="link-icon" />
                <span class="navbar-new-game-tooltiptext" >New Game</span>
            </div>
        </Link>
    );
};

