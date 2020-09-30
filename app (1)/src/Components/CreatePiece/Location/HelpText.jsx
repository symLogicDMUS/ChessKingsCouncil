import React from "react"
/**
 * title: Location of the Piece While Creating it 
 */
export let HelpText = <div>
  <p>You can position the piece in one of 4 locations in the center of the board: d4, d5, e4, or e5. These are the 4 squares that allow for the most symmetric customization.  For example, if you have an offset of 2 squares up and 1 square to the right, you could also add the mirror of this: 2 squares down and 1 square to the left. The 4 squares in the center of the board are the 4 that you can add mirrors of offsets and spans the most often. </p>
  <p>Piece location is also restricted to these 4 squares when creating a piece to prevent situations in which the game would be over by default. An example of this would be positioning the piece at d1, adding an offset of 8 squares up and 1 square to the right, and then substituting your piece for the Queen in your game. Actually, since the black version of the piece is the mirror image of the white version, the white King would also be trapped, creating a situation where both Kings are checkmated at the same time. This is an impossible situation in regular Chess and has no definition. You could extend the definition of stalemate to include this, but regardless the game would be over before the first move.</p>
  <p>You can use the location buttons to switch to any of the 4 locations at any time. You will be able to see how the piece can move from that location and add to its range from that location.</p>
</div>