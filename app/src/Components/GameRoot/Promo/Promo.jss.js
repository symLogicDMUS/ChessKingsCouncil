import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";
import {fade} from "@material-ui/core";

const navButtonSizes = {
    xxxsm: 36,
    xxsm: 52,
    xsm: 48,
    sm: 54,
    md: 60,
    lg: 66,
    xlg: 72,
    xxlg: 78,
}

export const useStyles = makeStyles({
    modal: props => ({
        zIndex: 8,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'absolute',
        top: 0,
        left: 0,
    }),
    promote_button: props => ({
        position: 'absolute',
        padding: '0.5vw',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        '@media screen and (max-width: 960px)': {
            width: '40vw',
            left: `30vw`,
            top: `calc(50vh + 20vw)`,
        },
        '@media screen and (min-width: 960px)': {
            width: '20vw',
            left: '40vw',
            top: `calc(50vh + 10vw)`,
        },
        '&:hover':{
            backgroundColor: fade('#000', 0.1)
        },
    }),
    icons: props => ({
        display: 'flex',
        flexDirection: 'row',
    }),
    icon: props => ({
        color: themes[props.theme].text,
    }),
    text: props => ({
        fontSize: '1.25vw',
        color: themes[props.theme].text,
    }),
    piece_img: props => ({
        height: '2.5vw',
        width: '2.5vw',
    }),
    nav_button: props => ({
        color: themes[props.theme].text,
        backgroundColor: 'unset',
        position: 'absolute',
        padding: 0,
        '@media screen and (max-width: 460px)': {
            width: '10vw',
            height: '10vw',
        },
        '@media screen and (min-width: 460px) and (max-width: 960px)': {
            width: '7.5vw',
            height: '7.5vw',
        },
        '@media screen and (min-width: 960px)': {
            height: '5vw',
            width: '5vw',
        },
        // '@media screen and (max-width: 360px)': {
        //     width: navButtonSizes.xxxsm,
        //     height: navButtonSizes.xxxsm,
        // },
        // '@media screen and (min-width: 360px) and (max-width: 560px)': {
        //     width: navButtonSizes.xxsm,
        //     height: navButtonSizes.xxsm,
        // },
        // '@media screen and (min-width: 560px) and (max-width: 760px)': {
        //     width: navButtonSizes.xsm,
        //     height: navButtonSizes.xsm,
        // },
        // '@media screen and (min-width: 760px) and (max-width: 960px)': {
        //     width: navButtonSizes.sm,
        //     height: navButtonSizes.sm,
        // },
        // '@media screen and (min-width: 960px) and (max-width: 1160px)': {
        //     width: navButtonSizes.md,
        //     height: navButtonSizes.md,
        // },
        // '@media screen and (min-width: 1160px) and (max-width: 1360px)': {
        //     width: navButtonSizes.lg,
        //     height: navButtonSizes.lg,
        // },
        // '@media screen and (min-width: 1360px) and (max-width: 1560px)': {
        //     width: navButtonSizes.xlg,
        //     height: navButtonSizes.xlg,
        // },
        // '@media screen and (min-width: 1560px)': {
        //     width: navButtonSizes.xxlg,
        //     height: navButtonSizes.xxlg,
        // },
    }),
    prevButton: props => ({
        left: '22.5vw',
        top: `calc(50vh - 2.5vw)`,
        // '@media screen and (max-width: 360px)': {
        //     top: `calc(50vh - ${navButtonSizes.xxxsm * 0.5}px)`,
        //     left: `calc(30vw - ${navButtonSizes.xxxsm * 1.5}px)`,
        // },
        // '@media screen and (min-width: 360px) and (max-width: 560px)': {
        //     top: `calc(50vh - ${navButtonSizes.xxsm * 0.5}px)`,
        //     left: `calc(30vw - ${navButtonSizes.xxsm * 1.5}px)`,
        // },
        // '@media screen and (min-width: 560px) and (max-width: 760px)': {
        //     top: `calc(50vh - ${navButtonSizes.xsm * 0.5}px)`,
        //     left: `calc(30vw - ${navButtonSizes.xsm * 1.5}px)`,
        // },
        // '@media screen and (min-width: 760px) and (max-width: 960px)': {
        //     top: `calc(50vh - ${navButtonSizes.sm * 0.5}px)`,
        //     left: `calc(30vw - ${navButtonSizes.sm * 1.5}px)`,
        // },
        // '@media screen and (min-width: 960px) and (max-width: 1160px)': {
        //     top: `calc(50vh - ${navButtonSizes.md * 0.5}px)`,
        //     left: `calc(40vw - ${navButtonSizes.md * 1.5}px)`,
        // },
        // '@media screen and (min-width: 1160px) and (max-width: 1360px)': {
        //     top: `calc(50vh - ${navButtonSizes.lg * 0.5}px)`,
        //     left: `calc(40vw - ${navButtonSizes.lg * 1.5}px)`,
        // },
        // '@media screen and (min-width: 1360px) and (max-width: 1560px)': {
        //     top: `calc(50vh - ${navButtonSizes.xlg * 0.5}px)`,
        //     left: `calc(40vw - ${navButtonSizes.xlg * 1.5}px)`,
        // },
        // '@media screen and (min-width: 1560px)': {
        //     top: `calc(50vh - ${navButtonSizes.xxlg * 0.5}px)`,
        //     left: `calc(40vw - ${navButtonSizes.xxlg * 1.5}px)`,
        // },
    }),
    nextButton: props => ({
        top: 'calc(50vh - 2.5vw)',
        left: '72.5vw',
        // '@media screen and (max-width: 360px)': {
        //     top: `calc(50vh - ${navButtonSizes.xxxsm * 0.5}px)`,
        //     left: `calc(30vw + 40vw + ${navButtonSizes.xxxsm * 0.5}px)`,
        // },
        // '@media screen and (min-width: 360px) and (max-width: 560px)': {
        //     top: `calc(50vh - ${navButtonSizes.xxsm * 0.5}px)`,
        //     left: `calc(30vw + 40vw + ${navButtonSizes.xxsm * 0.5}px)`,
        // },
        // '@media screen and (min-width: 560px) and (max-width: 760px)': {
        //     top: `calc(50vh - ${navButtonSizes.xsm * 0.5}px)`,
        //     left: `calc(30vw + 40vw + ${navButtonSizes.xsm * 0.5}px)`,
        // },
        // '@media screen and (min-width: 760px) and (max-width: 960px)': {
        //     top: `calc(50vh - ${navButtonSizes.sm * 0.5}px)`,
        //     left: `calc(30vw + 40vw + ${navButtonSizes.sm * 0.5}px)`,
        // },
        // '@media screen and (min-width: 960px) and (max-width: 1160px)': {
        //     top: `calc(50vh - ${navButtonSizes.md * 0.5}px)`,
        //     left: `calc(40vw + 20vw + ${navButtonSizes.md * 0.5}px)`,
        // },
        // '@media screen and (min-width: 1160px) and (max-width: 1360px)': {
        //     top: `calc(50vh - ${navButtonSizes.lg * 0.5}px)`,
        //     left: `calc(40vw + 20vw + ${navButtonSizes.lg * 0.5}px)`,
        // },
        // '@media screen and (min-width: 1360px) and (max-width: 1560px)': {
        //     top: `calc(50vh - ${navButtonSizes.xlg * 0.5}px)`,
        //     left: `calc(40vw + 20vw + ${navButtonSizes.xlg * 0.5}px)`,
        // },
        // '@media screen and (min-width: 1560px)': {
        //     top: `calc(50vh - ${navButtonSizes.xxlg * 0.5}px)`,
        //     left: `calc(40vw + 20vw + ${navButtonSizes.xxlg * 0.5}px)`,
        // },
    }),
    arrow_icon: props => ({
        width: '95%',
        height: '95%',
    }),
}, {index: 1});