import {makeStyles} from "@material-ui/core/styles";
import {
    fontSize0015,
    fontSize0023,
    fontSize0032,
} from "../../styles/fontSizes.jss";
import {profileHeight, profileWidth} from "../../GameRoot/BoardTool/BoardTool.jss";
import {themes} from "../../styles/themes.jss";

export const fontSizes = {
    desktop: fontSize0032,
    mobile: fontSize0015,
}

export const close_icon = () => ({
    fontSize: fontSize0023,
    '@media (min-aspect-ratio: 16/9)': {
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
        '@media (min-aspect-ratio: 16/9)': {
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
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
    }),
    profile_wb_modal: props => ({
        zIndex: 8,
        fontSize: fontSizes.desktop,
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '0.5em',
        '@media (min-aspect-ratio: 16/9)': {
            top: '50%',
            left: '50%',
            width: `${profileWidth.desktop}em`,
            height: `${profileHeight.desktop}em`,
            marginLeft: `${-profileWidth.desktop * 0.5}em`,
            marginTop: `${-profileHeight.desktop * 0.5}em`,
            justifyContent: 'flex-start',
        },
        '@media (max-aspect-ratio: 1/1)': {
            top: '5%',
            left: '100%',
            width: `${profileWidth.mobile}em`,
            height: `${profileHeight.mobile}em`,
            marginLeft: `${-profileWidth.mobile}em`,
            justifyContent: 'space-between',
        },
        backgroundColor: themes[props.theme].fill,
        border: `0.075em solid ${themes[props.theme].outline}`,
    }),
    header: props => ({
        flexGrow: 2,
        textAlign: 'center',
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
        '@media (min-aspect-ratio: 16/9)': {
            marginLeft: '0.5em',
        },
    }),

});