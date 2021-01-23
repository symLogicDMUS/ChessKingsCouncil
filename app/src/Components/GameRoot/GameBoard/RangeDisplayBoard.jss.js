import { makeStyles } from "@material-ui/core/styles";
import {boardPos, game_board} from "../../Reuseables/Board.jss";

export const useStyles = makeStyles({
    board: props => ({
        ...game_board(props.boardSize,2),
    }),
});