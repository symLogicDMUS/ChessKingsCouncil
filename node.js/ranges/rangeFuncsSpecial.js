var  pawn  = require("gameLogic/ranges/pawn/top/pawn");
var  king  = require("gameLogic/ranges/king/top/king");

/**
rangeFuncsSpecial is range functions for special pieces, ones that can ! be fully defined by the defs format
*/
let rangeFuncsSpecial = {'Pawn': pawn, 'King': king};

module.exports = rangeFuncsSpecial;

