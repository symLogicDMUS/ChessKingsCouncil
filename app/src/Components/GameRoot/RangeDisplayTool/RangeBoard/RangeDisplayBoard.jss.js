import makeStyles from "@material-ui/core/styles/makeStyles";
import {board} from "../../../Reuseables/Board.jss";


export const useStyles = makeStyles({
    board: props =>  ({
        ...board(props.fontSize),
    }),
})