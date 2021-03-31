import {themes} from "../../styles/themes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {fontSize0015, fontSize00184} from "../../styles/fontSizes.jss";

const margin = '0.4em';
const thinScreenFontSize = '3vw';

export const useStyles = makeStyles({
    nav_bar_button: props => ({
        display: 'flex',
        flexGrow: 3,
        borderRadius: 0,
        '@media screen and (max-width: 960px)': {
            fontSize: '1.25rem',
            width: "99%",
            height: "2em",
            justifyContent: "flex-start",
        },
        '@media screen and (min-width: 960px) and (max-width: 1220px)': {
            fontSize: fontSize0015,
            justifyContent: "center",
            height: "2.25em",
        },
        '@media screen and (min-width: 1220px)': {
            fontSize: fontSize00184,
            justifyContent: "center",
            height: "2.25em",
        },
        background: themes[props.theme].fill,
        '&:hover':{
            backgroundColor: themes[props.theme].button_hover_fill,
        },
    }),
    box: props => ({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexGrow: 4,
    }),
    icon: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: '1.1rem',
        },
        '@media screen and (min-width: 960px) and (max-width: 1220px)': {
            fontSize: fontSize0015,
        },
        '@media screen and (min-width: 1220px)': {
            fontSize: fontSize00184,
        },
        marginRight: margin,
    }),
    text: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: fontSize00184,
            marginRight: margin,
            marginTop: '0.1525em',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: fontSize00184,
            marginRight: margin,
            marginTop: '0.15em',
        },
    }),
    horizontal_nav_text_adjust: props => ({
        '@media screen and (min-width: 960px) and (max-width: 1220px)': {
            fontSize: fontSize0015,
        },
    }),
    normal_color: props => ({
        color: themes[props.theme].nav_text,
    }),
    hover_color: props => ({
        color: themes[props.theme].button_hover_text,
    }),
}, {index: 1});