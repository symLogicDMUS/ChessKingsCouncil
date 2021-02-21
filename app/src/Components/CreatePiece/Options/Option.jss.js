import {makeStyles} from "@material-ui/core/styles"
import {themes} from "../../styles/themes.jss";
import {
    fontSize002, fontSize0025, fontSize0028,
    fontSizeW0031, fontSizeW004,
} from "../../styles/fontSizes.jss";
import {innerHeight} from "../../helpers/windowMeasurments";
import {buttonSize} from "../Location/Location.jss";

export const optionButtonSize = 3.5;

export const useStyles = makeStyles({
    option: props => ({
        '@media (max-aspect-ratio: 7/10)': {
            fontSize: fontSize0028,
            margin: '0.25em',
            width: '3.5em',
            height: '3.5em',
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizeW0031,
            margin: '0.5em',
            width: '3.5em',
            height: '3.5em',
        },
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 7/10) and (max-aspect-ratio: 1/1)":{
            width: buttonSize.short,
            height: buttonSize.short,
            fontSize: buttonSize.short * 0.3,
            borderRadius: '0.25em',
            border: `0.01em solid ${themes[props.theme].outline}`,
        },
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: fontSize002,
            margin: 'unset',
            width: '3em',
            height: '3.5em',
        },
        minWidth: 0,
        color: themes[props.theme].button_text,
    }),
    button: props => ({
        marginTop: '0.25em',
        '&:hover': {
            background: 'none'
        },
        color: themes[props.theme].button_text,
    }),
    label: props => ({
        display: "flex",
        flexDirection: "column",
        border: 'black',
    }),
    icon: props => ({
        '@media (max-aspect-ratio: 7/10)': {
            fontSize: fontSize0028,
            width: '2.8em',
            height: '2.8em',
        },
        /*tablets*/
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizeW0031,
            width: '2.8em',
            height: '2.8em',
        },
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 7/10) and (max-aspect-ratio: 1/1)":{
            fontSize: buttonSize.short * 0.3,
            width: '2em',
            height: '2em',
        },
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: fontSize002,
            width: '2.8em',
            height: '2.8em',
        },

        color: themes[props.theme].button_text,
    }),
    text: props => ({
        '@media (max-aspect-ratio: 834/1194)': {
            fontSize: fontSize0028,
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)': {
            fontSize: fontSizeW004,
        },
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 7/10) and (max-aspect-ratio: 1/1)":{
            fontSize: buttonSize.short * 0.25,
        },
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: fontSize002,
        },
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].button_text,
    }),
});