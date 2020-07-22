/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import {Link} from "react-router-dom";
import "../NavBar.css";
import "./HomeLink.css";

export function HomeLink ({iconLabelPosLeft}) {
    return (
        <Link to="/">
            <div className="home">
                <img src="/Images/Navbar/home-invert.svg" className="link-icon" />
                <span class="navbar-home-tooltiptext" >Home</span>
            </div>
    
        </Link>
        );
};

