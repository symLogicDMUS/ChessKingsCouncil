import React from "react";

export let helpTitle = "Picking an Icon for Your Piece";

export let HelpText = (
    <div>
        <p>
            Choose images for the white and black versions of your piece. Click the Choose button to choose from a
            list of provided images or the Upload button to upload your own. An image that is not square dimentions
            will be reformated to be, so it can fit on a square. The following guidelines are recommended for picking
            an image:
        </p>
        <ol>
            <li>
                Don't pick images you've used for other pieces. If you do, don't use both pieces in the same game
                unless you're trying to be confusing.{" "}
            </li>
            <li>Pick 2 images that look similar but are colored differently.</li>
            <li>
                Don't pick an image that looks like a piece from regular Chess, especially if you're not going to
                substitute it for that piece.
            </li>
            <li>Images that contain transparency, and/or are .svg files probably look better when playing.</li>
            <img src="/Images/Help/Icon Tool Examples.svg" style={{position: "relative", top: 20}} />
        </ol>
    </div>
);
