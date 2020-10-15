import React from "react";
/**
 * title: Creating the Range of Your Piece
 */
export let helpTitle = "Creating the Range of a Piece";

export let HelpText = (
    <div>
        <p>The range of a piece is how it can move. I define ranges as 2 separate types: offsets and spans.</p>
        <p>
            Offsets are jumps: a Knight moves in offsets of 2 squares horizonal and 1 square vertical, or 1 square
            vertical and 2 squares horizontal.
        </p>
        <img src="/Images/Help/Knight Range.png" style={{ width: 150, height: 150 }} />
        <p>
            Click on a square and the app will measure how many squares X to the left or right, plus how many squares
            Y up or down, that square is from the piece’s current position. This is the offset. Now wherever the piece
            is in a game, whichever square is that offset from the location is somewhere the piece can move. Click the
            same square again to remove the offset.{" "}
        </p>
        <p>
            Spans are how Rooks, Bishops, and Queens move. A span of up means that starting from the piece’s location,
            every square in front of the piece in its same column is a part of its range, until another piece blocks
            the way or the end of the board is reached. The spans listed in clockwise order are: up, upper-right,
            right, lower-right, down, lower-left, left, upper-left. Click an arrow key to add that span to the piece’s
            range and click it again to remove it.{" "}
        </p>
        <img src="/Images/Help/Spans Example.PNG" style={{width: 150, height: 150}} />
        <img src="/Images/Help/Range Tool All Spans.svg" style={{position:"relative", left: 100}} />
        <p>
            When you add an offset or a span to your piece, you are adding it to the white version of the piece. The
            black version becomes the “mirror image” of what you added. For example, when you click the up arrow,{" "}
            <i>down</i> is added to the black version of the piece automatically. This is done to prevent an unfair
            imbalance between white and black versions of the same piece, while still allowing for the same level of
            customization. For example, if you created a piece that could only move up, and then substituted this
            piece for any of Rook, Bishop, Queen, or Knight, than if white and black versions of pieces were defined
            the same, the black version of this piece would be useless.{" "}
        </p>
        <p>
            Another example off adding range is if you click the square that is 2 up and 1 to the left from the
            piece’s location, than “+2, -1” would be added to the white version of this piece, and “-2, +1” would be
            added to the black version.
        </p>
        <p>
            If a square on the board is part of a span, the word “span” is displayed on the square. If the square is
            part of an offset, the offset calculation is displayed on the square. The text displayed on squares can be
            turned on and off with the checkboxes labeled “span text squares” and “offset text squares”.
        </p>
        <img src="/Images/Help/Range Tool Point at Text Checkboxs.svg" />
    </div>
); 