import React from "react";
import "./myPiecesPage.css";

/**
 * title: My Pieces Page
 */
export let myPiecesPage = 
<div>
  <p>On this page you can:</p>
  <ol>
    <li>View the ranges or offsets of the black or white version of any piece. Click the   <span className="ilb-ei"><img src="/Images/expand.svg" className="ilb-ei-img" /></span>   Icon at the top of the span or offset list to view an image of a board with only that piece, and its span or offset squares highlighted.</li>	
    <li>Delete the piece. Pieces that are deleted will not affect games in progress, but no new game can be started with that piece.</li>	
    <li>Click the Load button to go to the Create Piece page with that piece and further edit it.</li>	
  </ol>
</div>