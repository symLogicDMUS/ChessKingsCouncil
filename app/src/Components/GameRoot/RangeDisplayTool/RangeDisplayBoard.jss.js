import makeStyles from "@material-ui/core/styles/makeStyles";
import {board} from "../../Reuseables/Board.jss";
import {themes} from "../../styles/themes.jss";


export const useStyles = makeStyles({
    board: props =>  ({
        ...board(props.fontSize),
        outline: `0.04em solid ${themes[props.theme].outline}`
    }),
})