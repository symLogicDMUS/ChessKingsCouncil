/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import {Link} from "react-router-dom";
import "../NavBar.css";
import "./CreatePieceLink.css";

export function CreatePieceLink ({iconLabelPosLeft}) {
    return (
      <Link to="/CreatePiece">
        <div className="create-piece-link">
          <img src="/Images/Navbar/create-piece-invert.svg" className="link-icon" />
          <span class="navbar-create-piece-tooltiptext" >Create Piece</span>
        </div>
      </Link>
    );
};