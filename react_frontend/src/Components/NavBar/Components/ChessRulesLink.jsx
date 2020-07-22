/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import "../NavBar.css";
import "./ChessRulesLink.css";

export function ChessRulesLink ({iconLabelPosLeft}) {
  return (
      <a href="https://www.chess.com/learn-how-to-play-chess">
          <div className="chess-rules-link">
              <img src="/Images/Navbar/chess-rules-invert.svg" className="link-icon" />
              <span class="navbar-chess-rules-tooltiptext" >Chess Rules</span>
          </div>
      </a>
    );
};