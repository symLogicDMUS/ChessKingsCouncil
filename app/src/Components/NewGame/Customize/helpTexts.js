import React from "react";

export let titles = {
    0: "Customizing a New Game (Overview)",
    1: "Substituting your piece for a standard one",
    2: "Selecting a piece for Pawn promotion",
    3: "Effect that deleting a piece has on a game",
    4: "Viewing the range of a piece",
    5: "Options for playing the game",
};
const ilbEi = {
    display: 'inline-block',
    width: '11.2px',
    height: '11.2px',
 }
 
 const ilbEiImg = {
     width: '11.2px',
     height: '11.2px',
 }
export let paragraphs = {
    0: (
        <div>
            <p>
                Customize a new game by adding pieces that you created to the game as substitutes for regular pieces
                or to the list of pieces that Pawns can be promoted to.
            </p>
            <p>You can return to the Help menu any time through the help Icon in the upper left hand corner</p>
        </div>
    ),
    1: (
        <div>
            <p>
                Use the substitution drop down menu of a piece and select one of Rook, Bishop, Queen, or Knight, and
                the game will begin with your piece in place of it. Pawns and Kings cannot be substituted for.{" "}
            </p>
            <img src="/Images/Help/Clicking Sub Dropdown.svg" />
        </div>
    ),
    2: (
        <div>
            <p>
                Click the promotion checkbox of a piece and when a Pawn reaches the back row, the version of your
                piece that is the same color will be in the list of options to promote the Pawn to. There is a
                20-piece limit to the number Pawn promotions. You can check the Promo-All checkbox at the top of the
                window to add all your pieces to the list, but if you have more than 20 pieces than only the first 20
                will be added.
            </p>
            <img src="/Images/Help/Clicking Promo Checkbox.svg" />
        </div>
    ),
    3: (
        <p>
            Pieces that are deleted will not effect a saved game; the game will keep the definition of this piece.
            Games that have already started cannot be further customized in any way.
        </p>
    ),
    4: (
        <div>
            <p>
                Click the{" "}
                <span style={ilbEi}>
                    <img
                        src="/Images/expand/expand.svg"
                        style={ilbEiImg}
                        alt="expand icon for range and spans"
                    />
                </span>{" "}
                Icon at the top of the span or offset list to view an image of a board with only that piece, and its
                span or offset squares highlighted.
            </p>
            <img src="/Images/Help/range table point at span.svg" />
        </div>
    ),
    5: (
        <div>
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
            <img src="/Images/Help/Clicking Play As Dropdown.svg" />
        </div>
    ),
};

export let children = {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null
};

export let numSlides = 6;
