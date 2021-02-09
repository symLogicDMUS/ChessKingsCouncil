import {
    fontSize002,
    fontSize00224,
    fontSize0025,
    fontSize0034
} from "../../styles/fontSizes.jss";
import {drawerItemWidth} from "../../NewGame/Customize/Customize.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    save_resign_tool: props => ({
        fontSize: fontSize002,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        '@media screen and (min-width: 768px)': {
            width: drawerItemWidth,
            height: '5em',
            marginLeft: '1em',
            marginBottom: '1em',
            alignItems: 'flex-start',
            backgroundColor: themes[props.theme].fill,
        },
        '@media screen and (max-width: 767px)': {
            width: '100%',
            height: '100%',
            alignItems: 'flex-start',
        },
    }),
    option: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSize002,
            width: '5em',
            height: '5em',
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSize0034,
            width: '4em',
            height: '4em',
        },
        color: themes[props.theme].button_text,
        border: '0.05em solid #2b2b2b',
    }),
    button: props => ({
        fontSize: fontSize002,
        marginTop: '0.3em',
        width: '4.95em',
        height: '4.95em',
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
        width: '82.5%',
        height: '82.5%',
        color: themes[props.theme].text,
    }),
    text: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSize00224,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSize0025,
        },
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].button_text,
        width: '4em',
    }),
})