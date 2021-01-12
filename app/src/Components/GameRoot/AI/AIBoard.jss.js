import makeStyles from "@material-ui/core/styles/makeStyles";
import {board, boardSize, game_board} from "../../Reuseables/Board.jss";

export const useStyles = makeStyles({
    ai_board: props => ({
        ...game_board(1),
        width: boardSize,
        height: boardSize,
    }),
});