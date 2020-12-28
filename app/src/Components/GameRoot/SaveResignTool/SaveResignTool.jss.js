import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    save_resign_tool: props => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        '@media screen and (min-width: 768px)': {
            width: '90%',
            height: '7em',
            marginLeft: '5%',
            marginBottom: '4%',
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
            fontSize: props.fontSize,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: props.fontSize * 1.2,
        },
        width: '3.5em',
        height: '3.5em',
        color: themes[props.theme].button_text,
        border: '0.05em solid #2b2b2b',
    }),
    button: props => ({
        marginTop: '0.3em',
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
        width: '90%',
        height: '90%',
        color: themes[props.theme].text,
    }),
    text: props => ({
        '@media screen and (min-width: 768px)': {

            fontSize: props.fontSize * 0.7,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: props.fontSize * 0.9,
        },
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].button_text,
        width: '120%',
    }),
})