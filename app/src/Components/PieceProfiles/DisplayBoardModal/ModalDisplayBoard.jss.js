import {board} from "../../Reuseables/Board.jss";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    display_board: props => ({
        ...board(props.fontSize),
    }),
});