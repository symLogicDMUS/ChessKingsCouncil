import {pawn} from "gameLogic/ranges/pawn/top/pawn";
import {king} from "gameLogic/ranges/king/top/king";
/**
range functions for the pieces who ability cannot be fully defined by the defs format. Kings need to avoid check, Kings
initiate castling, Pawns can be promoted, capture differently than they move, &&  perform en-passant.
*/
specialFunctions = {"King" :king, "Pawn" :pawn};

// module.exports = specialFunctions;