import {themes} from "../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {availHeight, innerHeight, availWidth} from "../helpers/windowMeasurments";
import {fontSize0023, fontSize0027, fontSizeW006, fontSizeW0062} from "../styles/fontSizes.jss";
import {appBarHeight} from "../Reuseables/PersistentDrawer.jss";

export const fontSizes = {
    desktop: fontSize0023,
    mobile: fontSizeW0062,
    ipx: fontSizeW006,
    ipad: fontSize0027,
    short: fontSizeW006,
}

export const heights = {
    desktop: 13.03,
    mobile: 9,
    ipad: 9,
    short: 9,
}

export const widths = {
    desktop: '11.55em',
    mobile: '7.5em',
    ipad: '7.5em',
    short: '7.5em',
}

export const modalWidths = {
    mobile: availWidth(),
    desktop: availWidth() * 0.5,
    ipx: availWidth(),
    ipad: availWidth() * 0.95,
}

export const modalHeights = {
    mobile: availHeight() * 0.5,
    ipx: availHeight() * 0.5,
    ipad: availHeight() * 0.65,
    desktop : availHeight() * 0.75,
}

export const useStyles = makeStyles({
    piece_profiles: props => ({
        display: 'flex',
        flexDirection: 'column',
        '@media (max-aspect-ratio: 834/1194)': {
            height: modalHeights.mobile,
            width: modalWidths.mobile,
            marginTop: '0.05em',
            ...props.style,
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            height: modalHeights.ipad,
            width: modalWidths.ipad,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '0.25em',
            marginBottom: '0.25em',
            ...props.style,
        },
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 7/10) and (max-aspect-ratio: 1/1)":{
            height: (innerHeight() - appBarHeight)*0.7,
            ...props.style,
        },
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            height: modalHeights.desktop,
            width: modalWidths.desktop,
            ...props.style,
        },
        borderRadius: '0.35em',
        backgroundColor: themes[props.theme].fill,
        border: `0.12em solid ${themes[props.theme].odd_row}`,
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