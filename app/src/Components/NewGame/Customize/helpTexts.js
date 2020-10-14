import React from "react";
import "./HelpText.css";

export let titles = {
  0: "Customizing a New Game"
}

export let paragraphs = {
    0: (
        <div>
            <p>
                Customize a new game by adding pieces that you created to the game as substitutes for regular pieces
                or to the list of pieces that Pawns can be promoted to.
            </p>
            <p>
                Use the substitution drop down menu of a piece and select one of Rook, Bishop, Queen, or Knight, and
                the game will begin with your piece in place of it. Pawns and Kings cannot be substituted for.{" "}
            </p>
            <p>
                Click the promotion checkbox of a piece and when a Pawn reaches the back row, the version of your
                piece that is the same color will be in the list of options to promote the Pawn to. There is a
                20-piece limit to the number Pawn promotions. You can check the Promo-All checkbox at the top of the
                window to add all your pieces to the list, but if you have more than 20 pieces than only the first 20
                will be added.
            </p>
            <p>
                Pieces that are deleted will not affect a saved game; the game will keep the definition of this piece.
                Games that have already started cannot be further customized in any way.
            </p>
            <p>
                Click the{" "}
                <span className="ilb-ei">
                    <img src="/Images/expand/expand.svg" className="ilb-ei-img" alt="expand icon for range and spans" />
                </span>{" "}
                Icon at the top of the span or offset list to view an image of a board with only that piece, and its
                span or offset squares highlighted.
            </p>
            <p>Use the "Play As" dropdown to select one of the following options for playing the game:</p>
            <ol>
                <li>
                    Test: Play against yourself. Test the game or pieces that you created to see if you like it.
                    Demonstrate a sequence of moves to someone. Check that a particular feature still works after it
                    is updated/added.
                </li>
                <li>Black: Play against the computer as black</li>
                <li>White: Play against computer as white</li>
            </ol>
            <p>The Ai is currently at the easiest possible level</p>
            <p>You can return to the Help menu any time through the help Icon in the upper left hand corner</p>
        </div>
    )
};

export let children = {
  0: null
}

export let numSlides = 1;
