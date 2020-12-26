import makeStyles from "@material-ui/core/styles/makeStyles";
import {bigBoardMargin, board} from "../../Reuseables/Board.jss";

export const useStyles = makeStyles({
    interactive_board: props => ({
        ...board(props.fontSize),
        zIndex: 2,
        position: 'fixed',
        margin: bigBoardMargin,
        boxShadow: '0px 0px 20px white',
    }),
});