import { makeStyles } from "@material-ui/core/styles";
import {bigBoardMargin, board} from "../../Reuseables/Board.jss";

export const useStyles = makeStyles({
    display_board: props => ({
        zIndex: 0,
        ...board(props.fontSize),
        margin: bigBoardMargin,
        boxShadow: '0px 0px 25px white'
    }),
});