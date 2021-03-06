import {makeStyles} from "@material-ui/core/styles";
import {getTextWidth} from "../helpers/getTextWidth.jss";
import {modal} from "../helpers/modal.jss";
import {themes} from "../styles/themes.jss";
import {fontSize0015, fontSize0016} from "../styles/fontSizes.jss";

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
    title_box: props => ({
        width: '15em',
        display: 'flex',
        alignItems: 'center',
        marginRight: '10em',
        alignContent: 'center',
        justifyContent: 'center'
    }),
    title: props => ({
        fontSize: '2em',
        lineHeight: '0.7em',
        marginRight: '0.25em',
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
    }),
    title_icon: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSize0016,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSize0015,
        },
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