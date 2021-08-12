import { makeStyles } from "@material-ui/core/styles";
import { game_board } from "../../Reuseables/Board/Board.jss";

export const useStyles = makeStyles(
    {
        board: (props) => ({
            ...game_board(props.boardSize, props.boardPos, 0),
        }),
    },
    { index: 1 }
);
