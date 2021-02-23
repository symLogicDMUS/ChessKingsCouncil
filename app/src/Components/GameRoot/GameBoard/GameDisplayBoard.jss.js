import { makeStyles } from "@material-ui/core/styles";
import {game_board} from "../../Reuseables/Board.jss";

export const useStyles = makeStyles({
    board: props => ({
        ...game_board(props.boardSize,0),
    }),
}, {index: 1});