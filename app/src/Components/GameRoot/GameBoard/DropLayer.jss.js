import {makeStyles} from "@material-ui/core/styles";
import {dnd_layer} from "../../Reuseables/Board.jss";

export const useStyles = makeStyles({
    board: props => ({
       ...dnd_layer(props.boardSize, 4),
    }),
}, {index: 1});