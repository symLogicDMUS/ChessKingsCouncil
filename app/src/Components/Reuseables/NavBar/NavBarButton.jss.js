import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes.jss";
import {
    fontSize0015,
    fontSize002,
    fontSize0023,
    fontSize0024,
} from "../../styles/fontSizes.jss";

const margin = '0.4em';

export const useStyles = makeStyles({
    nav_bar_button: props => ({
        display: 'flex',
        flexGrow: 3,
        borderRadius: 0,
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSize0024,
            justifyContent: "flex-start",
            width: "99%",
            height: "2.5em"
        },
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSize002,
            justifyContent: "center",
            height: "2.25em",
        },
        background: themes[props.theme].fill,
    }),
    box: props => ({
        ...props.style,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexGrow: 4,
    }),
    icon: props => ({
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSize0024,
        },
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSize0023,
        },
        '@media screen and (min-width: 1040px) and (max-width: 1220px)': {
            fontSize: fontSize0015,
        },
        marginRight: margin,
    }),
    text: props => ({
        /*media query for phones/tablets (generalized)*/
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSize002,
            marginRight: margin,
            marginTop: '0.1525em',
        },
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSize002,
            marginRight: margin,
            marginTop: '0.15em',
        },
        '@media screen and (min-width: 1040px) and (max-width: 1220px)': {
            fontSize: fontSize0015,
        },
    }),
    normal_color: props => ({
        '@media screen and (max-width: 1040px)': {
            color: themes[props.theme].nav_text,
        },
        '@media screen and (min-width: 1040px)': {
            color: themes[props.theme].text_alt2,
        },
    }),
    hover_color: props => ({
        color: themes[props.theme].button_hover_text,
    }),
}, {index: 1});