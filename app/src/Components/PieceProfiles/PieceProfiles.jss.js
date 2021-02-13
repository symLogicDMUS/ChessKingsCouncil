import {themes} from "../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {availHeight, availWidth} from "../helpers/windowMeasurments";
import {fontSize0023, fontSize0027, fontSizeW006, fontSizeW0062} from "../styles/fontSizes.jss";

export const fontSizes = {
    desktop: fontSize0023,
    mobile: fontSizeW0062,
    ipx: fontSizeW006,
    ipad: fontSize0027
}

export const heights = {
    desktop: 13.03,
    mobile: 9,
    ipad: 9
}

export const widths = {
    desktop: '11.55em',
    mobile: '7.5em',
    ipad: '7.5em',
}

export const modalWidths = {
    mobile: availWidth(),
    desktop: availWidth() * 0.5,
    ipad: availWidth() * 0.95,
}

export const useStyles = makeStyles({
    piece_profiles: props => ({
        display: 'flex',
        flexDirection: 'column',
        '@media (max-aspect-ratio: 834/1194)': {
            height: availHeight() * 0.65,
            width: availWidth(),
            marginTop: '0.05em',
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)':{
            height: availHeight() * 0.65,
            width: availWidth() * 0.95,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '0.25em',
            marginBottom: '0.25em',
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            height: availHeight() * 0.75,
            width: availWidth() * 0.5,
        },
        backgroundColor: themes[props.theme].fill,
        border: `0.12em solid ${themes[props.theme].odd_row}`,
        borderRadius: '0.35em',
        ...props.style,
    }),
    profiles_window: props => ({
        overflowY: 'scroll',
    }),
    divider: props => ({
        fontSize: props.fontSize,
        width: '77em',
        marginLeft: '1.8em',
        marginTop: '0.75em',
        marginBottom: '0.75em',
    }),
});