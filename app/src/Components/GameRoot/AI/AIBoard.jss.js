import makeStyles from "@material-ui/core/styles/makeStyles";
import {bigBoardMargin, board} from "../../Reuseables/Board.jss";

export const useStyles = makeStyles({
    ai_board: props => ({
        zIndex: 1,
        ...board(props.fontSize),
        margin: bigBoardMargin,
    }),
});