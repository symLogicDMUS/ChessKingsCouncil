import {fontSize0019, fontSize002} from "../../styles/fontSizes.jss";
import { makeStyles } from "@material-ui/core/styles";

export const fontSizes = {
    desktop: fontSize002,
    mobile: fontSize0019,
}
export const widths = {
    desktop: '9em',
    mobile: '9em',
}

export const heights = {
    desktop: 9,
    mobile: 9,
}

export const useStyles = makeStyles({
    range_tool: props => ({
        width: '95%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'row',
        '@media screen and (min-width: 768px)': {
            justifyContent: 'center',
        },
        '@media screen and (max-width: 767px)': {
            justifyContent: 'space-between',
        },
    }),
    span_arrow_buttons: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
        },
        display: 'grid',
        gridTemplateColumns: "repeat(3, 2.85em)",
        gridTemplateRows: "repeat(3, 2.85em)",
        columnGap: '0.28em',
        rowGap: '0.28em',
    }),
});