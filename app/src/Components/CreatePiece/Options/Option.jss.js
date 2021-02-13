import {makeStyles} from "@material-ui/core/styles"
import {themes} from "../../styles/themes.jss";
import {
    fontSize0015, fontSize00184,
    fontSize002, fontSize0024, fontSize0025,
    fontSize00301,
    fontSize0035,
    fontSizeW0024,
    fontSizeW0028,
    fontSizeW0031,
    fontSizeW003224, fontSizeW004,
    fontSizeW0045
} from "../../styles/fontSizes.jss";

export const optionButtonSize = 3.5;

export const useStyles = makeStyles({
    option: props => ({
        '@media (max-aspect-ratio: 834/1194)': {
            fontSize: fontSize0024,
            margin: '0.25em',
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizeW0031,
            margin: '0.5em',
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
        '@media (max-aspect-ratio: 834/1194)': {
            fontSize: fontSize0025,
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)': {
            fontSize: fontSizeW004,
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSize002,
        },
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].button_text,
    }),
});