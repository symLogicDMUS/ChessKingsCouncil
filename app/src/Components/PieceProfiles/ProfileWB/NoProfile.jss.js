import {makeStyles} from "@material-ui/core/styles";
import {fontSize0015, fontSize0023, fontSize00457} from "../../styles/fontSizes.jss";
import {profileHeight, profileWidth} from "../../GameRoot/BoardTool/BoardTool.jss";
import {themes} from "../../styles/themes.jss";
import {fontSizes} from "./ProfileWBModal.jss";

export const close_icon = () => ({
    fontSize: fontSize0023,
    '@media screen and (min-device-width: 1040px)': {
        width: "0.5em",
        height: "0.5em",
    },
    '@media screen and (max-device-width: 1040px)': {
        width: "0.5em",
        height: "0.5em",
    },
});

export const useStyles = makeStyles({
    profile_top: props => ({
        '@media screen and (min-device-width: 1040px)': {
            fontSize: fontSizes.desktop,
            height: '0.5em',
        },
        '@media screen and (max-device-width: 1040px)': {
            fontSize: fontSizes.mobile,
            height: '1.5em',
        },
        position: 'absolute',
        top: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }),
    profile_flexbox: props => ({
        zIndex: 5,
        position: 'fixed',
        top: '50%',
        left: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '@media screen and (min-device-width: 1040px)': {
            fontSize: fontSizes.desktop,
            borderRadius: '0.25em',
            width: `${profileWidth.desktop}em`,
            height: `${profileHeight.desktop * 0.18}em`,
            marginLeft: `${-profileWidth.desktop * 0.5}em`,
            marginTop: `${-profileHeight.desktop * 0.18 * 0.5}em`,
        },
        '@media screen and (max-device-width: 1040px)': {
            fontSize: fontSizes.mobile,
            borderRadius: '0.5em',
            width: `${profileWidth.mobile * 4}em`,
            height: `${profileHeight.mobile * 0.3}em`,
            marginLeft: `${-profileWidth.mobile * 2}em`,
            marginTop: `${-profileHeight.mobile * 0.15}em`,
        },
        backgroundColor: themes[props.theme].fill,
        border: `0.035em solid ${themes[props.theme].outline}`,
    }),
    content: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
    }),
    caption: props => ({
        fontSize: fontSizes.mobile * 2,
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        lineHeight: '1em',
    }),
    inline_piece: props => ({
        '@media screen and (min-device-width: 1040px)': {
            fontSize: fontSizes.desktop,
        },
        '@media screen and (max-device-width: 1040px)': {
            fontSize: fontSizes.mobile * 2,
        },
        width: '1.1em',
        height: '1.1em',
        marginLeft: '0.25em',
    }),
}, {index: 1});
