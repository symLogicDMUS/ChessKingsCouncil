import {makeStyles} from "@material-ui/core/styles";
import {getTextWidth} from "../helpers/getTextWidth.jss";

export const button = (fontSize) => ({
    fontSize: fontSize,
    width: '48%',
    height: '2em',
});

export const dropdown = (fontSize) => ({
    fontSize: fontSize,
    height: '2em',
    '@media screen and (min-width: 768px)': {
        width: getTextWidth('Load Game', fontSize * 8, 'Garamond'),
    },
    '@media screen and (max-width: 767px)': {
        width: getTextWidth('Load Game', fontSize * 5.6, 'Garamond'),
    },
});
export const useStyles = makeStyles({
    flexbox: props => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '12em',
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
        '@media screen and (min-width: 768px)': {
            fontSize: props.fontSize * 8,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: props.fontSize * 5.6,
            width: '100%',
        },
        fontFamily: 'Garamond',
        lineHeight: '70%',
        textAlign: 'center',
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