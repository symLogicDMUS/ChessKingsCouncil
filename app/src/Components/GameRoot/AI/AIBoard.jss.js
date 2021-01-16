import makeStyles from "@material-ui/core/styles/makeStyles";
import {board, game_board} from "../../Reuseables/Board.jss";

export const useStyles = makeStyles({
    ai_board: props => ({
        ...game_board(props.boardSize,1),
    }),
});