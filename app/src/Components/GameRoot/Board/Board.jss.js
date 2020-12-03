import makeStyles from "@material-ui/core/styles/makeStyles";
import {board} from "../../Reuseables/BoardMixins.jss";

export const useStyles = makeStyles({
    interactive_board: {
        ...board,
        zIndex: 2,
    },
    display_board: {
        ...board,
        zIndex: 0,
        boxShadow: '0px 0px 25px white'
    }
});