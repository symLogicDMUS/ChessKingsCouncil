/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import {Link} from "react-router-dom";
import "../NavBar.css";
import "./LoadGameLink.css";

export function LoadGameLink ({iconLabelPosLeft}) {
    return (
        <Link to="/LoadGame">
            <div className="load-game-link">
                <img src="/Images/Navbar/load-game-invert.svg" className="link-icon" alt="icon for the load game page" />
                <span class="navbar-load-game-tooltiptext" >Load Game</span>
            </div>
        </Link>
        );
};

