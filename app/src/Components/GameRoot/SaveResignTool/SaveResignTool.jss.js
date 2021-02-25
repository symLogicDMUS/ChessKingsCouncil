import {
    fontSize002,
    fontSize00224,
    fontSizeW0027,
    fontSizeW005,
    fontSizeW0056,
    fontSizeW0033,
    fontSizeW004,
} from "../../styles/fontSizes.jss";
import {drawerItemWidth} from "../../NewGame/Customize/Customize.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    save_resign_tool: props => ({
        display: 'flex',
        flexDirection: 'row',
        '@media screen and (max-device-width: 1040px)': {
            fontSize: fontSize002,
            width: '100%',
            height: '100%',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
        },
        '@media screen and (min-device-width: 1040px)': {
            width: drawerItemWidth,
            fontSize: fontSize002,
            height: '5em',
            marginLeft: '1em',
            marginBottom: '1em',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
        },
    }),
    option: props => ({
        display: 'flex',
        flexDirection: 'column',
        '@media screen and (max-device-width: 1040px)': {
            fontSize: fontSizeW0027,
            width: '10em',
            height: '10em',
        },
        '@media screen and (min-device-width: 1040px)': {
            fontSize: fontSize002,
            width: '5em',
            height: '5em',
        },
        color: themes[props.theme].button_text,
        border: `0.05em solid ${themes[props.theme].outline}`,
    }),
    button: props => ({
        '&:hover': {
            background: 'none'
        },
        '@media screen and (max-device-width: 412px)': {
            fontSize: fontSizeW0033,
            width: '4.95em',
            height: '4.95em',
            marginTop: '0.5em',
        },
        '@media screen and (min-device-width: 412px) and (max-device-width: 767px)': {
            fontSize: fontSizeW0027,
            width: '9.5em',
            height: '9.5em',
            marginTop: '1em',
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1040px)':{
            fontSize: fontSizeW0033,
            width: '4.95em',
            height: '4.95em',
            marginTop: '0.5em',
        },
        '@media screen and (min-device-width: 1040px)': {
            fontSize: fontSize002,
            width: '4.9em',
            height: '4.9em',
            marginTop: '0.5em',
        },
    }),
    label: props => ({
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    }),
    icon: props => ({
        '@media screen and (max-device-width: 412px)': {
            fontSize: fontSizeW0027,
            width: '6em',
            height: '6em',
        },
        '@media screen and (min-device-width: 412px) (max-device-width: 1040px)': {
            fontSize: fontSizeW0033,
            width: '4.2075em',
            height: '4.2075em',
        },
        '@media screen and (min-device-width: 1040px)': {
            fontSize: fontSize002,
            width: '3em',
            height: '3em',
        },
        color: themes[props.theme].text,
    }),
    text: props => ({
        '@media screen and (max-device-width: 412px)': {
            fontSize: fontSizeW0056,
        },
        '@media screen and (min-device-width: 412px) and (max-device-width: 767px)':{
            fontSize: fontSizeW004,
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1040px)': {
            fontSize: fontSizeW005,
        },
        '@media screen and (min-device-width: 1040px)': {
            fontSize: fontSize00224,
        },
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].button_text,
        width: '4em',
    }),
    divider: props => ({
       width: '6.5%',
    }),
}, {index: 1})