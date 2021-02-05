import {fontSize0023, fontSize00301} from "../../styles/fontSizes.jss";
import { makeStyles } from "@material-ui/core/styles";

export const fontSizes = {
    desktop: fontSize00301,
    mobile: fontSize0023,
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
        fontSize: fontSizes.desktop,
        width: '22.5em',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
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