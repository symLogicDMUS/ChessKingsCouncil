import makeStyles from "@material-ui/core/styles/makeStyles";
import {board} from "../../Reuseables/Board.jss";
import {themes} from "../../styles/themes.jss";
import {fontSizes} from "./BoardTool.jss";

export const useStyles = makeStyles({
    board: props => ({
        '@media screen and (max-device-width: 1040px)': {
            ...board(fontSizes.mobile),
            marginTop: '-1em'
        },
        "@media screen and (max-device-width: 412px)": {
            marginTop: '0.1em',
            ...board(fontSizes.ipx),
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1040px)':{
            ...board(fontSizes.ipad),
        },

        '@media screen and (min-device-width: 1040px)': {
            ...board(fontSizes.desktop),
        },
        outline: `0.04em solid ${themes[props.theme].outline}`
    }),
})