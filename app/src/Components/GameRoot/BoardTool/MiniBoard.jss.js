import makeStyles from "@material-ui/core/styles/makeStyles";
import {fontSize00301, fontSize00457} from "../../styles/fontSizes.jss";
import {board} from "../../Reuseables/Board.jss";
import {themes} from "../../styles/themes.jss";
import {modal} from "../../helpers/modal.jss";

export const fontSizes = {
    desktop: fontSize00457,
    mobile: fontSize00301,
}

export const useStyles = makeStyles({
    modal: props => ({
        ...modal,
        zIndex: 7,
    }),
    board: props => ({
        '@media screen and (min-width: 768px)': {
            ...board(fontSize00457),
        },
        '@media screen and (max-width: 767px)': {
            ...board(fontSize00301),
            marginTop: '-1em'
        },
        outline: `0.04em solid ${themes[props.theme].outline}`
    }),
})