import { makeStyles } from "@material-ui/core/styles";
import {boardPos, game_board} from "../../Reuseables/Board.jss";

export const useStyles = makeStyles({
    board: props => ({
        ...game_board(props.boardSize,2),
        // '@media screen and (max-width: 767px)': {
        //     position: 'absolute',
        //     top: boardPos.mobile.top,
        //     left: boardPos.mobile.left,
        // },
    }),
});