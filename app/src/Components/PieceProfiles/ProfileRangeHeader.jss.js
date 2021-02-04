import {makeStyles} from "@material-ui/core/styles";
import {fontSizes, widths} from "./PieceProfiles.jss";
import {themes} from "../styles/themes.jss";

export const useStyles = makeStyles({
    header: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
            width: widths.desktop,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
            width: widths.mobile,
        },
        height: '1.5em',
        display: 'flex',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row-reverse',
        fontFamily: 'Roboto-Light, Roboto',
        backgroundColor: themes[props.theme].fill,
        outline: `0.05em solid ${themes[props.theme].outline}`,
    }),
    /*Parts of the range table's header: */
    title: props => ({
        fontSize: '0.85em',
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
        textAlign: 'center',
        flexGrow: 3,
        '@media screen and (min-width: 768px)': {
            paddingLeft: '2em',
        },
        '@media screen and (max-width: 767px)': {
            marginLeft: '0.5em',
        },
    }),
    expand_widget: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: '1em',
            width: '1.5em',
            height: '1.5em',
            marginLeft: '1em',
        },
        '@media screen and (max-width: 767px)': {
            fontSize: '0.25em',
            width: '1.5em',
            height: '1.5em',
            marginLeft: '1em',
        },
        cursor: 'pointer',
        color: themes[props.theme].text,
    }),
    expand_icon: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
            width: '1em',
            height: '1em',
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
            width: '0.7em',
            height: '0.7em',
        },
    }),
});