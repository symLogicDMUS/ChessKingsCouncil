import React from "react";

export let titles = {
    0: "The Game Description",
    1: "Range Display Tool",
};

export let paragraphs = {
    0: <p>In order: The name of the game, and in parentheses the type of game, and what the player is playing as.</p>,
    1: (
        <div>
            <p>
                The Range display tool is a mini board that updates along with the game. Click any square on the mini
                board containing a piece, and the squares where that piece can move if it's that piece's color's turn
                are highlighted. This is useful for viewing where your opponent can move, as well as recalling the
                ranges of pieces you created.{" "}
            </p>
            <p>
                Use the expand and colapse (
                <span className="ilb-ei">
                    <img src="/Images/expand.svg" className="ilb-ei-img" alt="expand icon" />
                </span>{" "}
                and{" "}
                <span className="ilb-ei">
                    <img src="/Images/unexpand.svg" className="ilb-ei-img" alt="unexpand-icon" />
                </span>
                ) to show and hide the Range Display Board.{" "}
            </p>
            <p>
                You can return to the help menu any time through the Help option in the upper left hand corner
            </p>
        </div>
    ),
};

export let children = {
    0: null,
    1: null,
};

export let numSlides = 2;
