import makeStyles from "@material-ui/core/styles/makeStyles";
import {bigBoardMargin, board} from "../../Reuseables/Board.jss";

export const useStyles = makeStyles({
    interactive_board: props => ({
        zIndex: 2,
        ...board(props.fontSize),
        boxShadow: '0px 0px 20px white',
        margin: bigBoardMargin,
    }),
});