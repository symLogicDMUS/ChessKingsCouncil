import makeStyles from "@material-ui/core/styles/makeStyles";
import {board, gameBoard} from "../../Reuseables/BoardMixins.jss";

export const useStyles = makeStyles({
    ai_board: {
        ...gameBoard(1),
    },
});
