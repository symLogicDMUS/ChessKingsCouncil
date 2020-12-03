import makeStyles from "@material-ui/core/styles/makeStyles";
import {board, boardSize, gameBoardTop, gameBoardLeft} from "../../Reuseables/BoardMixins.jss";
import {availWidth, centerOfScreenX} from "../../helpers/windowMeasurments";

const gameBoard = (z) => ({
    zIndex: z,
    // "@media screen and (min-device-width: 768px)": {
        top: gameBoardTop('desktop'),
        left: gameBoardLeft('desktop'),
    // },
    ...board('large'),
})

export const useStyles = makeStyles({
    interactive_board: {
        ...gameBoard(2),
    },
    display_board: {
        ...gameBoard(0),
        boxShadow: '0px 0px 25px white'
    }
});