import makeStyles from "@material-ui/core/styles/makeStyles";
import {board} from "../../Reuseables/Board.jss";
import {themes} from "../../styles/themes.jss";
import {modal} from "../../helpers/modal.jss";
import {fontSize00301, fontSize0066} from "../../styles/fontSizes.jss";


export const useStyles = makeStyles({
    modal: props => ({
        ...modal,
        zIndex: 7,
    }),
    board: props => ({
        '@media screen and (min-width: 768px)': {
            ...board(fontSize0066),
            outline: `0.04em solid ${themes[props.theme].outline}`
        },
        '@media screen and (max-width: 767px)': {
            ...board(fontSize00301),
            marginTop: '-0.5em'
        },
    }),
})