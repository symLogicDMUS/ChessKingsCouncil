import {makeStyles} from "@material-ui/core/styles"
import {themes} from "../../styles/themes.jss";
import {fontSize002} from "../../styles/fontSizes.jss";

export const optionButtonSize = 3.5;

export const useStyles = makeStyles({
    option: props => ({
        '@media screen and (min-width: 1040px)': {
            width: '3em',
            height: '3.5em',
        },
        minWidth: 0,
    }),
    icon_button: props => ({
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
        '@media screen and (max-width: 747px)': {
            fontSize: '1em',
            width: '1.5em',
            height: '1.5em',
        },
        /*smaller tablets*/
        '@media screen and (min-width: 768px) and (max-width: 991px)': {
            fontSize: '1em',
            width: '2.75em',
            height: '2.75em',
        },
        /*larger tablets*/
        '@media screen and (min-width: 992px) and (max-width: 1040px)': {
            fontSize: '1em',
            width: '3.75em',
            height: '3.75em',
        },
        /*desktop*/
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSize002,
            width: '2.8em',
            height: '2.8em',
        },
        color: themes[props.theme].button_text,
    }),
    text: props => ({
        /*mobile*/
        '@media screen and (max-width: 767px)': {
            fontSize: '0.65em',
        },
        /*smaller tablets*/
        '@media screen and (min-width: 768px) and (max-width: 991px)': {
            fontSize: '1em',
        },
        /*larger tablets*/
        '@media screen and (min-width: 992px) and (max-width: 1040px)': {
            fontSize: '1.5em',
        },
        /*desktop*/
        '@media screen and (min-width: 1040px)': {
            fontSize: '0.75em',
        },
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].button_text,
    }),
}, {index: 1});