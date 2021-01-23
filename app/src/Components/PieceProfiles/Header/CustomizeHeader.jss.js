import {makeStyles} from "@material-ui/core/styles";
import {header, text} from "./PieceHeader.jss";
import {themes} from "../../styles/themes.jss";
import {fontSize0023, fontSize0025, fontSize00301} from "../../styles/fontSizes.jss";
import {fontSizes} from "../ProfileWB.jss";

export const widths = {
    desktop: '11.55em',
    mobile: '7.5em'
}

export const checkbox_root = (theme) => ({
    ...text(theme),
    marginLeft: '-0.15em',
});

export const checkbox_circle = () => ({
    '@media screen and (min-width: 768px)': {
        width: '1.5em',
        height: '1.5em',
    },
    '@media screen and (max-width: 767px)': {
        width: '1em',
        height: '1em',
    },
});

export const sub_buttons = () => ({
    '@media screen and (min-width: 768px)': {
        fontSize: fontSize0023,
    },
    '@media screen and (max-width: 767px)': {
        fontSize: fontSize00301
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
        height: '2em',
    }),
    piece_name: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSize0025,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
        },
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto'
    }),
    box: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
            width: widths.desktop,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
            width: widths.mobile,
        },
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
    no_sub: props => ({
        width: '1.2em',
        height: '1.2em',
        color: themes[props.theme].text,
    }),
    is_sub: props => ({
        width: '1.2em',
        height: '1.2em',
        color: themes[props.theme].outline,
    }),
});