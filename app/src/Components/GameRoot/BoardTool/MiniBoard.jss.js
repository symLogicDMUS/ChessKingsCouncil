import makeStyles from "@material-ui/core/styles/makeStyles";
import {board} from "../../Reuseables/Board.jss";
import {themes} from "../../styles/themes.jss";
import {modal} from "../../helpers/modal.jss";


export const useStyles = makeStyles({
    modal: props => ({
        ...modal,
        zIndex: 7,
    }),
    board: props => ({
        ...board(props.fontSize),
        outline: `0.04em solid ${themes[props.theme].outline}`
    }),
})