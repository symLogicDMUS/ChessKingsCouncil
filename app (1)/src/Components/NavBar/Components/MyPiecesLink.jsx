/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import {Link} from "react-router-dom";
import "../NavBar.css";
import "./MyPiecesLink.css";

export function MyPiecesLink ({iconLabelPosLeft}) {
    return (
        <Link to="/ComingSoon">
            <div className="my-pieces-link">
                <img src="/Images/Navbar/my-pieces-invert.svg" className="link-icon" />
                <span class="navbar-my-pieces-tooltiptext" >My Pieces</span>
            </div>
        </Link>
        );
};

