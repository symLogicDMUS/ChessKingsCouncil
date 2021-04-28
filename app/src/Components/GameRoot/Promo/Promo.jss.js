import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";
import {fade} from "@material-ui/core";

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
        fontSize: '1.25rem',
        color: themes[props.theme].text,
    }),
    piece_img: props => ({
        height: '2.5rem',
        width: '2.5rem',
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
    }),
    prevButton: props => ({
        left: '22.5vw',
        top: `calc(50vh - 2.5vw)`,
    }),
    nextButton: props => ({
        top: 'calc(50vh - 2.5vw)',
        left: '72.5vw',
    }),
    arrow_icon: props => ({
        width: '95%',
        height: '95%',
    }),
}, {index: 1});