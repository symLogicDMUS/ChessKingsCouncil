import makeStyles from "@material-ui/core/styles/makeStyles";
import {board} from "../../Reuseables/Board.jss";
import {themes} from "../../styles/themes.jss";
import {fontSizes} from "./BoardTool.jss";

export const useStyles = makeStyles({
    board: props => ({
        '@media (min-aspect-ratio: 16/9)': {
            ...board(fontSizes.desktop),
        },
        '@media (max-aspect-ratio: 1/1)': {
            ...board(fontSizes.mobile),
            marginTop: '-1em'
        },
        "@media (max-aspect-ratio: 1/2)": {
            marginTop: '0.1em',
            ...board(fontSizes.ipx),
        },
        '@media (aspect-ratio: 1024/1366)':{
            ...board(fontSizes.ipad),
        },
        outline: `0.04em solid ${themes[props.theme].outline}`
    }),
})