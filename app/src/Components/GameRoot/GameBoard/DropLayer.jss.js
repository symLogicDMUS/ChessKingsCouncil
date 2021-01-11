import {makeStyles} from "@material-ui/core/styles";
import {dnd_layer} from "../../Reuseables/Board.jss";

export const useStyles = makeStyles({
    board: props => ({
       ...dnd_layer(3),
        backgroundColor: 'rgba(177,250,174, 0.3)',
        outline: '2px dashed #b1faae',
    }),
});