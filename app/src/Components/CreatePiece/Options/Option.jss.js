import {makeStyles} from "@material-ui/core/styles"
import {themes} from "../../styles/themes.jss";
import {
    fontSize002, fontSize0025, fontSize0028,
    fontSizeW0031, fontSizeW004,
} from "../../styles/fontSizes.jss";
import {innerHeight} from "../../helpers/windowMeasurments";

export const optionButtonSize = 3.5;

export const useStyles = makeStyles({
    option: props => ({
        '@media (max-aspect-ratio: 834/1194)': {
            fontSize: fontSize0028,
            margin: '0.25em',
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizeW0031,
            margin: '0.5em',
        },
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 360/515) and (max-aspect-ratio: 1/1)":{
            fontSize: innerHeight()*0.035,
        },
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
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
        '@media (max-aspect-ratio: 834/1194)': {
            fontSize: fontSize0028,
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizeW0031,
        },
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 360/515) and (max-aspect-ratio: 1/1)":{
            fontSize: innerHeight()*0.035,
        },
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: fontSize002,
        },
        width: '2.8em',
        height: '2.8em',
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
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 360/515) and (max-aspect-ratio: 1/1)":{
            fontSize: innerHeight()*0.03,
        },
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: fontSize002,
        },
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].button_text,
    }),
});