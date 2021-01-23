import {makeStyles} from "@material-ui/core/styles";
import {getTextWidth} from "../helpers/getTextWidth.jss";
import {modal} from "../helpers/modal.jss";
import {themes} from "../styles/themes.jss";

export const button = (fontSize) => ({
    fontSize: fontSize,
    width: '48%',
    height: '2em',
});

export const useStyles = makeStyles({
    modal: props => ({
       ...modal,
       zIndex: 1,
    }),
    flexbox: props => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: '0.5em',
        '@media screen and (max-width: 767px)': {
            width: '100%',
        },
    }),
    content: props => ({
        fontSize: props.fontSize,
        height: '16em',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'space-evenly',
        '@media screen and (min-width: 768px)': {
            width: '50em',
        },
        '@media screen and (max-width: 767px)': {
            width: '100%',
        },
    }),
    title: props => ({
        fontSize: '3em',
        fontFamily: 'Roboto-Light, Roboto',
        lineHeight: '0.7em',
        marginRight: '0.25em',
        color: themes[props.theme].text,
    }),
    title_icon: props => ({
        fontSize: props.fontSize,
        height: '3em',
        width: '3em',
        marginLeft: '0.25em',
        color: themes[props.theme].text,
    }),
    buttons: props => ({
        fontSize: props.fontSize,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '1.8em',
        '@media screen and (min-width: 768px)': {
            width: getTextWidth('Load Game', props.fontSize * 8, 'Garamond'),
        },
        '@media screen and (max-width: 767px)': {
            width: getTextWidth('Load Game', props.fontSize * 5.6, 'Garamond'),
        },
    }),
});