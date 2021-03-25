import {
    fontSize00184,
    fontSize0019, fontSize002,
    fontSize00224
} from "../../styles/fontSizes.jss";
import { makeStyles } from "@material-ui/core/styles";

export const fontSizes = {
    wide: fontSize00224,
    thin: fontSize0019,
    ipad: fontSize00184,
    ipx: fontSize002,
}
export const widths = {
    wide: '9em',
    thin: '9em',
    ipx: '9em',
    ipad: '9em',
}

export const heights = {
    wide: 9,
    thin: 9,
    ipx: 9,
    ipad: 9,
}

export const useStyles = makeStyles({
    range_tool: props => ({
        width: '95%',
        // margin: 'auto',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        '@media screen and (min-width: 960px)': {
            justifyContent: 'center',
        },
        '@media screen and (max-width: 960px)': {
            justifyContent: 'space-between',
        },
        '@media screen and (min-width: 768px) and (max-width: 960px)':{
            justifyContent: 'center',
        },
    }),
    span_arrow_buttons: props => ({
        '@media screen and (min-width: 960px)': {
            fontSize: fontSizes.wide,
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        '@media screen and (max-width: 960px)': {
            fontSize: fontSizes.thin,
        },
        '@media screen and (max-width: 412px)': {
            marginTop: '1em',
        },
        '@media screen and (min-width: 768px) and (max-width: 960px)':{
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        display: 'grid',
        gridTemplateColumns: "repeat(3, 2.85em)",
        gridTemplateRows: "repeat(3, 2.85em)",
        columnGap: '0.28em',
        rowGap: '0.28em',
    }),
}, {index: 1});