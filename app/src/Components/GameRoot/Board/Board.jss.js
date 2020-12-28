import makeStyles from "@material-ui/core/styles/makeStyles";
import {board, game_board} from "../../Reuseables/Board.jss";

export const useStyles = makeStyles({
    interactive_board: props => ({
        ...board(props.fontSize),
        ...game_board(props.fontSize, 2),
    }),
});