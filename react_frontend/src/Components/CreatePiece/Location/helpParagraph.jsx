import React from "react";

export let helpParagraph = 
<p>
You can position the piece in one of 4 locations in the center of the board: d4, d5, e4, or e5. These 4 squares are the 4 that almost every offset or span can be matched by its mirror image. For example, if you have an offset of 2 squares up and 1 square to the right, you would want to also add the opposite of this: 2 squares down and 1 square to the left. This is done to encourage the most symmetric ranges possible. Piece location is also restricted to these 4 squares to prevent situations in which the game would be over by default: such as positioning the piece at d1, adding an offset of 8 squares up and 1 square to the right, and then substituting your piece for the Queen in your game. The user can use the location buttons to switch to any of the 4 locations at any time, to see how the piece would be able to move from that location.
</p>