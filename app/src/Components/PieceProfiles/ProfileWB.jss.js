import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../styles/themes.jss";
import {profileHeight} from "./Profile.jss";
import {fontSizes, widths} from "./PieceProfiles.jss";

export const useStyles = makeStyles({
    profile_wb: props => ({
        zIndex: 'inherit',
        display: 'flex',
        '@media screen and (min-width: 768px)': {
            width: '100%',
            fontSize: fontSizes.desktop,
            flexDirection: 'row',
            flexWrap: 'no-wrap',
            justifyContent: 'space-evenly',
            marginBottom: '0.7em',
            marginTop: '0.7em',
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
            height: `${profileHeight*0.85}`,
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
    }),
    range_header: props => ({
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
