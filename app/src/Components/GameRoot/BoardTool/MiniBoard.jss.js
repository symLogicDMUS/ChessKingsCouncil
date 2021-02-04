import makeStyles from "@material-ui/core/styles/makeStyles";
import {board} from "../../Reuseables/Board.jss";
import {themes} from "../../styles/themes.jss";
import {fontSizes} from "./BoardTool.jss";

export const useStyles = makeStyles({
    board: props => ({
        '@media screen and (min-width: 768px)': {
            ...board(fontSizes.desktop),
        },
        '@media screen and (max-width: 767px)': {
            ...board(fontSizes.mobile),
            marginTop: '-1em'
        },
        outline: `0.04em solid ${themes[props.theme].outline}`
    }),
})