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
        '@media (min-aspect-ratio: 16/9)': {
            flexWrap: 'wrap',
        },
        '@media (max-aspect-ratio: 1/1)': {
            width: '100%',
            flexWrap: 'nowrap',
            justifyContent: 'center',
        },
    }),
    profile_header: props => ({
        backgroundColor: themes[props.theme].odd_row,
        '@media (min-aspect-ratio: 16/9)': {
            height: '4em',
            width: '89%',
            marginLeft: '5.1%',
        },
        '@media (max-aspect-ratio: 1/1)': {
            height: '3.5em',
            width: '95%',
            marginTop: '-0.5em',
            marginBottom: '-0.75em',
        },
    }),
    profile_wb: props => ({
        zIndex: 'inherit',
        width: '95%',
        display: 'flex',
        '@media (min-aspect-ratio: 16/9)': {
            fontSize: fontSizes.desktop,
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            marginLeft: '2.5%',
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.mobile,
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: '3.5%',
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
        '@media (min-aspect-ratio: 16/9)': {
            fontSize: fontSizes.desktop,
            height: '3.5em',
            width: '11em',
            marginTop: '-0.4em',
            marginBottom: '-0.4em',
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.mobile,
            height: '2em',
            width: '7.5em',
            marginTop: '-0.4em',
            marginBottom: '-0.75em',
        },
        "@media (max-aspect-ratio: 1/2)": {
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
        '@media (min-aspect-ratio: 16/9)': {
            fontSize: fontSizes.desktop,
            width: '11em',
            height: '18em',
            marginTop: '-4em',
            marginBottom: '-2em',
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.mobile,
            width: '7.5em',
            height: '13em',
            marginTop: '-2em',
            marginBottom: '-1em',
        },
        "@media (max-aspect-ratio: 1/2)": {
            fontSize: fontSizes.ipx,
            width: '9.5em',
            height: '15em',
            marginTop: '-3em',
            marginBottom: '-1em',
        },
    }),
});