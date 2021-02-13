import {makeStyles} from "@material-ui/core/styles"
import {themes} from "../../styles/themes.jss";
import {
    fontSize002, fontSize00301, fontSize0035
} from "../../styles/fontSizes.jss";

export const optionButtonSize = 3.5;

export const useStyles = makeStyles({
    option: props => ({
        '@media (min-aspect-ratio: 16/9)': {
            fontSize: fontSize002,
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSize0035,
            margin: '0.25em'
        },
        '@media (aspect-ratio: 1024/1366)':{
            fontSize: fontSize00301,
            margin: 'auto'
        },
        width: '3.5em',
        height: '3.5em',
        color: themes[props.theme].button_text,
    }),
    button: props => ({
        marginTop: '0.25em',
        width: '120%',
        height: '120%',
        '&:hover': {
            background: 'none'
        },
    }),
    label: props => ({
        display: "flex",
        flexDirection: "column",
        border: 'black',
    }),
    icon: props => ({
        width: '100%',
        height: '100%',
    }),
    text: props => ({
        '@media (min-aspect-ratio: 16/9)': {
            fontSize: fontSize002,
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSize0035,
        },
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].button_text,
    }),
});