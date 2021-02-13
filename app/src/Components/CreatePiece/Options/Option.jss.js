import {makeStyles} from "@material-ui/core/styles"
import {themes} from "../../styles/themes.jss";
import {
    fontSize002, fontSize00301, fontSize0035
} from "../../styles/fontSizes.jss";

export const optionButtonSize = 3.5;

export const useStyles = makeStyles({
    option: props => ({
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSize0035,
            margin: '0.25em'
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSize00301,
            margin: 'auto'
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSize002,
            margin: 'unset',
        },
        minWidth: 0,
        width: '3em',
        height: '3.5em',
        color: themes[props.theme].button_text,
    }),
    button: props => ({
        marginTop: '0.25em',
        width: '200%',
        height: '200%',
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
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSize0035,
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSize002,
        },
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].button_text,
    }),
});