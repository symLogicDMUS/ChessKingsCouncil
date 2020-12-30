import {makeStyles} from "@material-ui/core/styles";
import {header, text} from "./PieceHeader.jss";
import {mobileScaler} from "../ProfileWB.jss";
import {themes} from "../../styles/themes.jss";

export const promo_checkbox = (fontSize, theme) => ({
    '@media screen and (min-width: 768px)': {
        ...text(fontSize * 1.2, theme),
    },
    '@media screen and (max-width: 767px)': {
        ...text(fontSize * 1.3, theme)
    },
});

export const checkbox_root = (fontSize) => ({
    '@media screen and (min-width: 768px)': {
        fontSize: fontSize * 1.2,
    },
    '@media screen and (max-width: 767px)': {
        fontSize: fontSize * mobileScaler
    },
    marginLeft: '-0.15em',
});

export const checkbox_circle = (fontSize) => ({
    '@media screen and (min-width: 768px)': {
        width: '1.5em',
        height: '1.5em',
    },
    '@media screen and (max-width: 767px)': {
        width: '1em',
        height: '1em',
    },
});

export const sub_buttons = (fontSize) => ({
    '@media screen and (min-width: 768px)': {
        fontSize: fontSize * 1.2,
    },
    '@media screen and (max-width: 767px)': {
        fontSize: fontSize * mobileScaler
    },
    width: '11.55em',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'no-wrap',
});

export const useStyles = makeStyles({
    header: props => ({
        ...header(props.fontSize, props.style, props.theme),
        justifyContent: 'space-evenly',
        height: '2em',
        '@media screen and (min-width: 768px)': {
            width: '100%',
        },
        '@media screen and (max-width: 767px)': {
            width: '95%',
            marginLeft: '2.75%',
        },
    }),
    header_text: props => ({
        '@media screen and (min-width: 768px)': {
            ...text(props.fontSize * 1.2, props.theme),
            width: `${11.55 / 1.2}em`,
        },
        '@media screen and (max-width: 767px)': {
            ...text(props.fontSize * 1.3, props.theme),
            width: '5em',
        },
    }),
    box: props => ({
        '@media screen and (min-width: 768px)': {
            width: '11.55em',
        },
        '@media screen and (max-width: 767px)': {
            width: '8em',
        },
        fontSize: '1em',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'flex-start',
    }),
    sub_button: props => ({
        fontSize: '1em',
        width: '1.5em',
        height: '1.5em',
    }),
    sub_icon: props => ({
        fontSize: '1em',
        width: '1.25em',
        height: '1.25em',
    }),
});