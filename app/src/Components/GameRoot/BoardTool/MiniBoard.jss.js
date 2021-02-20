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
        "@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)": {
            marginTop: '0.1em',
            ...board(fontSizes.ipx),
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            ...board(fontSizes.ipad),
        },
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 360/515) and (max-aspect-ratio: 1/1)":{
            ...board(fontSizes.short),
        },
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            ...board(fontSizes.desktop),
        },
        outline: `0.04em solid ${themes[props.theme].outline}`
    }),
})