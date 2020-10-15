import React from "react";
/**
 * title: Giving Your Piece a Name
 */
export let helpTitle = "Picking the Name of Your Piece";

export let HelpText = (
    <div>
        <p>
            Type the name of your piece and it will appear above the board as you type. It is saved automatically. The
            app will stop you from saving if you leave the name field blank or enter the name of one of the 6 standard
            pieces: Rook, Bishop, Knight, King, Queen, or Pawn.
        </p>
        <img
            src="/Images/Help/Name Tool Standard Names Not Allowed.svg"
            alt="example of Name Tool"
            style={{ position: "relative" }}
        />
    </div>
);
