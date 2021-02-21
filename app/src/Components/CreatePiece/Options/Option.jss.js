import {makeStyles} from "@material-ui/core/styles"
import {themes} from "../../styles/themes.jss";
import {fontSize002} from "../../styles/fontSizes.jss";
import {button} from "../CreatePiece.jss";

export const optionButtonSize = 3.5;

export const useStyles = makeStyles({
    option: props => ({
        ...button(props.theme),
        minWidth: 0,
    }),
    button: props => ({
        marginTop: '0.2em',
        color: themes[props.theme].button_text,
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
        /*mobile*/
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: '1em',
            width: '1.5em',
            height: '1.5em',
        },
        /*desktop*/
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: fontSize002,
            width: '2.8em',
            height: '2.8em',
        },
        color: themes[props.theme].button_text,
    }),
    text: props => ({
        /*mobile*/
        '@media screen and (max-aspect-ratio: 1/1)': {
            fontSize: '0.65em',
        },
        /*desktop*/
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: '0.75em',
        },
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].button_text,
    }),
});