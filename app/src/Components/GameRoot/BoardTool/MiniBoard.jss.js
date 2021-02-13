import makeStyles from "@material-ui/core/styles/makeStyles";
import {board} from "../../Reuseables/Board.jss";
import {themes} from "../../styles/themes.jss";
import {fontSizes} from "./BoardTool.jss";

export const useStyles = makeStyles({
    board: props => ({
        '@media (max-aspect-ratio: 1/1)': {
            ...board(fontSizes.mobile),
            marginTop: '-1em'
        },
        "@media (max-aspect-ratio: 1/2)": {
            marginTop: '0.1em',
            ...board(fontSizes.ipx),
        },
        '@media (min-aspect-ratio: 3/4) and (max-aspect-ratio: 1/1)':{
            ...board(fontSizes.ipad),
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            ...board(fontSizes.desktop),
        },
        outline: `0.04em solid ${themes[props.theme].outline}`
    }),
})