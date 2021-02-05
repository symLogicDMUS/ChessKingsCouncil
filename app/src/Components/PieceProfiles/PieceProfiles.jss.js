import {makeStyles} from "@material-ui/core/styles";
import {fontSize001685, fontSize00219, fontSize0023, fontSize0034} from "../styles/fontSizes.jss";
import {availHeight, availWidth} from "../helpers/windowMeasurments";
import {themes} from "../styles/themes.jss";

export const fontSizes = {
    desktop: fontSize0023,
    mobile: fontSize0034,
    ipx: fontSize00219,
}

export const heights = {
    desktop: 13.03,
    mobile: 9,
}

export const widths = {
    desktop: '11.55em',
    mobile: '7.5em',
}

export const useStyles = makeStyles({
    piece_profiles: props => ({
        display: 'flex',
        flexDirection: 'column',
        '@media screen and (min-width: 768px)': {
            height: availHeight() * 0.75,
            width: availWidth() * 0.5,
            marginLeft: '0.25em',
            marginTop: '0.25em',
        },
        '@media screen and (max-width: 767px)': {
            height: availHeight() * 0.65,
            width: availWidth(),
            marginTop: '0.05em',
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

