import Rankfile from "../types/Rankfile";
import PawnHistories from "./PawnHistories";
import {KingsMoved} from "./KingsMoved";
import {RooksMoved} from "./RooksMoved";

type Records =  {
    kings_moved: KingsMoved,
    last_pawn_move: Rankfile,
    num_consecutive_non_pawn_moves: number,
    pawn_histories: PawnHistories,
    rooks_moved: RooksMoved,
}
export default Records;