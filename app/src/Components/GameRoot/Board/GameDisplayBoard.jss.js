import { makeStyles } from "@material-ui/core/styles";
import {board, game_board} from "../../Reuseables/Board.jss";

export const useStyles = makeStyles({
    display_board: props => ({
        ...board(props.fontSize),
        ...game_board(props.fontSize, 0),
        marginTop: '-8em',
        boxShadow: '0 0 0.1em white',
    }),
});