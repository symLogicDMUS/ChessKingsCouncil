import makeStyles from "@material-ui/core/styles/makeStyles";
import {board} from "../../Reuseables/BoardMixins.jss";

export const useStyles = makeStyles({
    ai_board: {
        ...board,
        zIndex: 1,
    },
});
