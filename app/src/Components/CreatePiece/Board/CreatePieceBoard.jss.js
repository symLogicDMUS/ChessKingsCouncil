import makeStyles from "@material-ui/core/styles/makeStyles";
import {bigBoardMargin, board, board_mobile} from "../../Reuseables/Board.jss";


export const useStyles = makeStyles({
    board: props => ({
        ...board(props.fontSize),
        '@media screen and (min-width: 768px)': {
            marginLeft: bigBoardMargin,
            marginTop: bigBoardMargin,
        },
        boxShadow: '0px 0px 20px white'
    }),
});