import {makeStyles} from "@material-ui/core/styles"
import {get2ItemFontSizes} from "../../CreatePiece.jss";
import {fontSize002} from "../../../styles/fontSizes.jss";

export const buttonSizeEm = 3

export const useStyles = makeStyles({
    span_arrow_buttons: props => ({
        /*media query for phones/tablets (generalized)*/
        '@media screen and (max-device-width: 1040px)': {
            fontSize: get2ItemFontSizes(),
        },
        /*desktop*/
        '@media screen and (min-device-width: 1040px)': {
            fontSize: fontSize002,
        },
        width: '9em',
        height: '9em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }),
    row: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
}, {index: 1});