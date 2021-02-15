import {
    fontSize002,
    fontSize00224,
    fontSizeW00238,
    fontSizeW0027,
    fontSizeW005,
    fontSizeW0056,
    fontSizeW00375, fontSizeW0033, fontSizeW0035, fontSizeW004
} from "../../styles/fontSizes.jss";
import {drawerItemWidth} from "../../NewGame/Customize/Customize.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    save_resign_tool: props => ({
        fontSize: fontSize002,
        display: 'flex',
        flexDirection: 'row',
        '@media (max-aspect-ratio: 1/1)': {
            width: '100%',
            height: '100%',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
        },
        '@media (max-aspect-ratio: 6/10)': {
            fontSize: fontSizeW00238,
            justifyContent: 'space-between',
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)':{
            marginTop: '-2vh',
            width: '100%',
            height: '100%',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            width: drawerItemWidth,
            height: '5em',
            marginLeft: '1em',
            marginBottom: '1em',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            // backgroundColor: themes[props.theme].fill,
        },
    }),
    option: props => ({
        display: 'flex',
        flexDirection: 'column',
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizeW0033,
            width: '7em',
            height: '7em',
            border: `0.05em solid ${themes[props.theme].outline}`,
        },
        '@media (max-aspect-ratio: 6/10)': {
            fontSize: fontSizeW0027,
            width: '10em',
            height: '10em',
            border: `0.05em solid ${themes[props.theme].outline}`,
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizeW0033,
            width: '7em',
            height: '7em',
            border: `0.05em solid ${themes[props.theme].outline}`,
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSize002,
            width: '5em',
            height: '5em',
            border: `0.05em solid ${themes[props.theme].outline}`,
        },
        color: themes[props.theme].button_text,
    }),
    button: props => ({
        '&:hover': {
            background: 'none'
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizeW0033,
            width: '4.95em',
            height: '4.95em',
            marginTop: '0.5em',
        },
        '@media (max-aspect-ratio: 6/10)': {
            fontSize: fontSizeW0027,
            width: '9.5em',
            height: '9.5em',
            marginTop: '1em',
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizeW0033,
            width: '4.95em',
            height: '4.95em',
            marginTop: '0.5em',
        },
        '@media (min-aspect-ratio: 1001/1000)': {
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
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSize002,
            width: '3em',
            height: '3em',
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizeW0033,
            width: '4.2075em',
            height: '4.2075em',
        },
        '@media (max-aspect-ratio: 6/10)': {
            fontSize: fontSizeW0027,
            width: '6em',
            height: '6em',
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizeW0033,
            width: '4.2075em',
            height: '4.2075em',
        },
        color: themes[props.theme].text,
    }),
    text: props => ({
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSize00224,
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizeW005,
        },
        '@media (max-aspect-ratio: 6/10)': {
            fontSize: fontSizeW0056,
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizeW004,
        },
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].button_text,
        width: '4em',
    }),
})