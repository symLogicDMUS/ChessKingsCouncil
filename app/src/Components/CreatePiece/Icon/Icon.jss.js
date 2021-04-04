import {themes} from "../../styles/themes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles({
    icon_tool: props => ({
        '@media screen and (max-width: 960px)': {
            position: 'absolute',
            width: '100vw',
        },
        '@media screen and (min-width: 960px)': {
            width: '22.5vw',
            marginBottom: '1.15vw',
        },
    }),
    img_windows_flexbox: props => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'nowrap',
    }),
    title: props => ({
        fontSize: '1.8vh',
        width: '100%',
        lineHeight: '1em',
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        marginBottom: '2%',
    }),
    buttons_and_img: props => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '60%'
    }),
    button_group: (props) => ({
        display: 'flex',
        flexDirection: 'column',
        fontSize: '2vh',
        justifyContent: 'space-between',
        height: '5em',
    }),
    button: (props) => ({
        fontSize: '1.6vh',
        background: themes[props.theme].button_fill,
        color: themes[props.theme].button_text,
        width: '7.5em',
        height: '2.5em',
    }),
}, {index: 1});