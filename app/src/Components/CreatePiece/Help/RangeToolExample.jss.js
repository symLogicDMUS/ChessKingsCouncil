import {fontSize00184, fontSize0019, fontSize002, fontSize00219, fontSize00224} from "../../styles/fontSizes.jss";
import { makeStyles } from "@material-ui/core/styles";

export const fontSizes = {
    desktop: fontSize00224,
    mobile: fontSize0019,
    ipad: fontSize00184,
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
        // margin: 'auto',
        display: 'flex',
        flexDirection: 'row',
        '@media (min-aspect-ratio: 1001/1000)': {
            justifyContent: 'center',
        },
        '@media (max-aspect-ratio: 1/1)': {
            justifyContent: 'space-between',
        },
        '@media (aspect-ratio: 1024/1366)':{
            justifyContent: 'center',
        },
    }),
    span_arrow_buttons: props => ({
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSizes.desktop,
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.mobile,
        },
        '@media (aspect-ratio: 1024/1366)':{
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        display: 'grid',
        gridTemplateColumns: "repeat(3, 2.85em)",
        gridTemplateRows: "repeat(3, 2.85em)",
        columnGap: '0.28em',
        rowGap: '0.28em',
    }),
});