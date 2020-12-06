import makeStyles from "@material-ui/core/styles/makeStyles";
import {gameBoard} from "../../Reuseables/BoardMixins.jss";

export const useStyles = makeStyles({
    interactive_board: {
        ...gameBoard(2),
    },
    display_board: {
        ...gameBoard(0),
        boxShadow: '0px 0px 25px white'
    }
});