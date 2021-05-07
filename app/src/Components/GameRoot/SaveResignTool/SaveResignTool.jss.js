import {drawerItemWidth} from "../../NewGame/Customize/Customize.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes/themes.jss";

export const useStyles = makeStyles({
    save_resign_tool: props => ({
        display: 'flex',
        flexDirection: 'row',
        '@media screen and (max-width: 960px)': {
            fontSize: '2vh',
            width: '100%',
            height: '100%',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: '2vh',
            marginBottom: '1vw',
            flexWrap: 'nowrap',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
        },
    }),
    option: props => ({
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '2.5vh',
        minWidth: 16,
        minHeight: 16,
        borderRadius: '0.25rem',
        color: themes[props.theme].text,
        border: `0.05rem solid ${themes[props.theme].outline}`,
        '@media screen and (max-width: 960px)': {
            width: '10vw',
            height: '10vw',
        },
        '@media screen and (min-width: 960px)': {
            width: '5.5vw',
            height: '5.5vw',
        },
        "& .MuiSvgIcon-root": {
            width: '3.25vw',
            height: '3.25vw',
            color: themes[props.theme].text,
        },
        "& .MuiTypography-root": {
            fontSize: '1vw',
            fontFamily: 'Roboto-Light, Roboto',
            color: themes[props.theme].button_text,
        },
    }),
    button: props => ({
        '@media screen and (min-width: 600px) and (max-width: 960px)': {
            fontSize: '2vw',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: '1.5vw',
        },
        width: '6.5em',
        height: '2.1em',
        border: `0.05em solid ${themes[props.theme].outline}`,
    }),
    yes_button: props => ({
       marginRight: '2vw',
    }),
    no_button: props => ({
        marginLeft: '2vw',
    }),
    label: props => ({
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    }),
    icon: props => ({
        color: themes[props.theme].text,
        width: '3.25vw',
        height: '3.25vw',
    }),
    text: props => ({
        fontSize: '1.2vw',
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].button_text,
    }),
    divider: props => ({
        width: '6.5%',
    }),
}, {index: 1})