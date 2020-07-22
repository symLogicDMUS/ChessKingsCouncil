/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import {Link} from "react-router-dom";
import "../NavBar.css";
import "./CouncilRulesLink.css";

export function CouncilRulesLink ({iconLabelPosLeft}) {
    return (
        <Link to="/CouncilRules">
            <div className="council-rules-link">
                <img src="/Images/Navbar/council-rules-invert.svg" className="link-icon" />
                <span class="navbar-council-rules-tooltiptext" >Council Rules</span>
            </div>
        </Link>
        );
};

