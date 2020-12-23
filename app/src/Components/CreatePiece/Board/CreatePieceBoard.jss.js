import makeStyles from "@material-ui/core/styles/makeStyles";
import {bigBoardMargin, board} from "../../Reuseables/Board.jss";


export const useStyles = makeStyles({
    board: props => ({
        ...board(props.fontSize),
        marginLeft: bigBoardMargin,
        marginTop: bigBoardMargin,
        boxShadow: '0px 0px 20px white'
    }),
});