import React from "react";
/**
 * title: Creating the Range of Your Piece
 */
export let createPieceRangeTool = 
<div>
  <p>The range of a piece is how it can move. I define ranges as 2 separate types: offsets and spans.</p>
  <p>Offsets are jumps: a Knight moves in offsets of 2 squares horizonal and 1 square vertical, or 1 square vertical and 2 squares horizontal. Click on a square and the app will measure how many squares X to the left or right, plus how many squares Y up or down, that square is from the piece’s current position. This is the offset. Now wherever the piece is in a game, whichever square is the offset from that location, is somewhere the piece can move. Click the same square again to remove the offset. </p>
  <p>Spans are how Rooks, Bishops, and Queens move. A span of up means that starting from the piece’s location, every square in front of the piece in its same column is a part of its range, until another piece blocks the way or the end of the board is reached. The spans listed in clockwise order are: up, upper-right, right, lower-right, down, lower-left, left, upper-left. Click an arrow key to add that span to the piece’s range and click it again to remove it. </p>
  <p>When the user adds an offset or a range to their piece, they are adding it to the white version of the piece. The black version becomes the “mirror image” of what they added. For example, when a user clicks the up arrow, <i>down</i> is added to the black version of the piece automatically. This is done to prevent an unfair imbalance between white and black versions of the same piece, while still allowing for the same level of customization. For example, if the user created a piece that could only move up, and then substituted this piece for any of Rook, Bishop, Queen, or Knight, than if white and black versions of pieces were defined the same, than the black version of this piece would be useless. </p>
  <p>Another example off adding range is if the user clicks the square that is 2 up and 1 to the left from the piece’s location, than “+2, -1” would be added to the white version of this piece, and “-2, +1” would be added to the black version.</p>
</div>