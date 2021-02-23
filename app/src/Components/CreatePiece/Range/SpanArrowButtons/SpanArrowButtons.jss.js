import {makeStyles} from "@material-ui/core/styles"
import {get2ItemFontSizes} from "../../CreatePiece.jss";
import {fontSize002} from "../../../styles/fontSizes.jss";

export const buttonSizeEm = 3

export const useStyles = makeStyles({
    span_arrow_buttons: props => ({
        display: 'grid',
        /*media query for phones/tablets (generalized)*/
        '@media screen and (max-device-width: 1040px)': {
            fontSize: get2ItemFontSizes(),
        },
        '@media screen and (min-device-width: 1040px)': {
            fontSize: fontSize002,
        },
        gridTemplateColumns: "repeat(3, 2.85em)",
        gridTemplateRows: "repeat(3, 2.85em)",
        columnGap: '0.28em',
        rowGap: '0.28em',
    }),
});