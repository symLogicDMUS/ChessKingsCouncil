import {makeStyles} from "@material-ui/core/styles"
import {themes} from "../../styles/themes.jss";

export const optionButtonSize = 3.5;

export const useStyles = makeStyles({
    option: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: props.fontSize,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: props.fontSize*1.75,
            margin: '0.2em'
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
        fontSize: props.fontSize*0.9,
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].button_text,
    }),
});