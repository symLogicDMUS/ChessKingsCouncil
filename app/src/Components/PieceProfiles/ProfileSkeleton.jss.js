import {makeStyles} from "@material-ui/core/styles";
import {fontSizes, heights, widths as avatarSize, widths} from "./PieceProfiles.jss";
import {availWidth} from "../helpers/windowMeasurments";
import {profileHeight} from "./Profile.jss";
import {themes} from "../styles/themes.jss";
import {fontSize0016, fontSize0023, fontSize0024, fontSize00245, fontSize0025} from "../styles/fontSizes.jss";

export const useStyles = makeStyles({
    profile: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        width: '100%',
    }),
    profile_header: props => ({
        width: '95%',
        height: '5em',
        marginTop: '-0.5em',
        marginBottom: '-0.1.75em',
        marginLeft: '2.5%',
        backgroundColor: themes[props.theme].odd_row,
    }),
    profile_wb: props => ({
        zIndex: 'inherit',
        width: '95%',
        display: 'flex',
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
            justifyContent: 'space-evenly',
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: '3.5%'
        },
    }),
    item: props => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        fontFamily: 'Roboto-Light, Roboto',
    }),
    item_header: props => ({
        fontFamily: 'Roboto-Light, Roboto',
        backgroundColor: themes[props.theme].odd_row,
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
            height: '3.5em',
            width: '12em',
            marginTop: '-0.4em',
            marginBottom: '-0.4em',
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
            height: '2em',
            width: '7.5em',
            marginTop: '-0.4em',
            marginBottom: '-0.75em',
        },
        "@media (aspect-ratio: 375/812)": {
            fontSize: fontSizes.ipx,
            height: '3.5em',
            width: '9.5em',
            marginTop: '-0.4em',
            marginBottom: '-0.4em',
        },
    }),
    item_content: props => ({
        fontFamily: 'Roboto-Light, Roboto',
        backgroundColor: themes[props.theme].odd_row,
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
            width: '12em',
            height: '18em',
            marginTop: '-4em',
            marginBottom: '-2em',
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
            width: '7.5em',
            height: '13em',
            marginTop: '-2em',
            marginBottom: '-1em',
        },
        "@media (aspect-ratio: 375/812)": {
            fontSize: fontSizes.ipx,
            width: '9.5em',
            height: '15em',
            marginTop: '-3em',
            marginBottom: '-1em',
        },
    }),
});