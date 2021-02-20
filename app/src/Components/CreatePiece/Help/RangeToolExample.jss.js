import {
    fontSize00184,
    fontSize0019, fontSize002,
    fontSize00224,
    fontSizeW0035
} from "../../styles/fontSizes.jss";
import { makeStyles } from "@material-ui/core/styles";

export const fontSizes = {
    desktop: fontSize00224,
    mobile: fontSize0019,
    ipad: fontSize00184,
    ipx: fontSize002,
}
export const widths = {
    desktop: '9em',
    mobile: '9em',
    ipx: '9em',
    ipad: '9em',
}

export const heights = {
    desktop: 9,
    mobile: 9,
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
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            justifyContent: 'center',
        },
        '@media (max-aspect-ratio: 1/1)': {
            justifyContent: 'space-between',
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            justifyContent: 'center',
        },
    }),
    span_arrow_buttons: props => ({
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: fontSizes.desktop,
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.mobile,
        },
        '@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)': {
            marginTop: '1em',
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
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