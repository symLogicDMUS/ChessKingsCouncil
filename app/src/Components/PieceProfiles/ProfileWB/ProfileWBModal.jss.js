import {makeStyles} from "@material-ui/core/styles";
import {
    fontSize0015, fontSize002, fontSize00224,
    fontSize0023,
    fontSize0032, fontSizeW0024, fontSizeW0028,
} from "../../styles/fontSizes.jss";
import {profileHeight, profileWidth} from "../../GameRoot/BoardTool/BoardTool.jss";
import {themes} from "../../styles/themes.jss";

export const fontSizes = {
    desktop: fontSize0032,
    mobile: fontSize0015,
    ipad: fontSize00224,
}

export const close_icon = () => ({
    fontSize: fontSize0023,
    '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
        width: "1.5em",
        height: "1.5em",
    },
    '@media (max-aspect-ratio: 1/1)': {
        width: "0.5em",
        height: "0.5em",
    },
});

export const useStyles = makeStyles({
    profile_top: props => ({
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: fontSizes.desktop,
            width: `${profileWidth.desktop * 0.97}em`,
            marginLeft: `${profileWidth.desktop * 0.03}em`,
            height: '1em',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
        },
        '@media (max-aspect-ratio: 1/1)': {
            width: '100%',
            fontSize: fontSizes.mobile,
            marginLeft: `${profileWidth.mobile * 0.03}em`,
            height: '5em',
            marginBottom: '1.25em',
            alignItems: 'center',
            justifyContent: 'space-around',
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.ipad,
            width: `${profileWidth.ipad * 0.95}em`,
            marginLeft: `${profileWidth.ipad * 0.03}em`,
            height: '1em',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: 'auto',
        },
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
    }),
    profile_wb_modal: props => ({
        zIndex: 8,
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '0.5em',
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            top: '50%',
            left: '50%',
            fontSize: fontSizes.desktop,
            width: `${profileWidth.desktop}em`,
            height: `${profileHeight.desktop}em`,
            marginLeft: `${-profileWidth.desktop * 0.5}em`,
            marginTop: `${-profileHeight.desktop * 0.5}em`,
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        '@media (max-aspect-ratio: 1/1)': {
            top: '5%',
            left: '100%',
            fontSize: fontSizes.mobile,
            width: `${profileWidth.mobile}em`,
            height: `${profileHeight.mobile}em`,
            marginLeft: `${-profileWidth.mobile}em`,
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)': {
            top: '50%',
            left: '50%',
            fontSize: fontSizes.ipad,
            width: `${profileWidth.ipad}em`,
            height: `${profileHeight.ipad}em`,
            marginLeft: `${-profileWidth.ipad * 0.5}em`,
            marginTop: `${-profileHeight.ipad * 0.5}em`,
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        backgroundColor: themes[props.theme].fill,
        border: `0.075em solid ${themes[props.theme].outline}`,
    }),
    wb_container: props => ({
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            width: `${profileWidth.desktop * 0.925}em`,
        },
        '@media (max-aspect-ratio: 1/1)': {
            width: `${profileWidth.mobile * 0.925}em`,
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            width: `${profileWidth.ipad * 0.925}em`,
        },
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 'auto',

    }),
    header: props => ({
        flexGrow: 2,
        textAlign: 'center',
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            marginLeft: '0.5em',
        },
    }),

});