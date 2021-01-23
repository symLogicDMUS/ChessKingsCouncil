import {fontSize00184, fontSize0023, fontSize00301} from "../styles/fontSizes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../styles/themes.jss";

export const fontSizes = {
    desktop: fontSize0023,
    mobile: fontSize00184
}

export const widths = {
    desktop: '11.55em',
    mobile: 7.5,
}

export const heights = {
    desktop: 13.03,
    mobile: 7.25,
}

export const useStyles = makeStyles({
    profile_wb: props => ({
        fontSize: props.fontSize,
        zIndex: 'inherit',
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'space-evenly',
        '@media screen and (min-width: 768px)': {
            marginBottom: '0.7em',
            marginTop: '0.7em',
        },
        '@media screen and (max-width: 767px)': {
            marginBottom: '0.35em',
            marginTop: '0.35em',
        },
    }),
    range_header: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSize0023,
            width: '11.55em',
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSize00301,
            width: '7.5em',
        },
        height: '1.5em',
        display: 'flex',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row-reverse',
        backgroundColor: themes[props.theme].fill,
        borderTop: `0.05em solid ${themes[props.theme].outline}`,
        borderLeft: `0.05em solid ${themes[props.theme].outline}`,
        borderRight: `0.05em solid ${themes[props.theme].outline}`,
    }),
    box: props => ({
        flexGrow: 100,
    }),
    /*Parts of the range table's header: */
    range_title: props => ({
        fontSize: '0.85em',
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
        '@media screen and (min-width: 768px)': {
            textAlign: 'center',
            paddingLeft: '2em',
        },
        '@media screen and (max-width: 767px)': {
            textAlign: 'left',
            paddingLeft: '1em',
        },
    }),
    range_expand_widget: props => ({
        fontSize: '1em',
        width: '1.5em',
        height: '1.5em',
        color: themes[props.theme].text,
    }),
    range_expand_icon: props => ({
        '@media screen and (min-width: 768px)': {
            width: '1em',
            height: '1em',
        },
        '@media screen and (max-width: 767px)': {
            width: '0.7em',
            height: '0.7em',
        },
    }),
})
