import makeStyles from "@material-ui/core/styles/makeStyles";
import {drawerWidth} from "../GameRoot.jss";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    save_resign_tool: props => ({
        zIndex: 1,
        fontSize: props.fontSize,
        width: {drawerWidth},
        height: '20em',
        backgroundColor: 'green',
        borderRadius: '10px'
    }),
    options_flexbox: props => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        width: '90%',
        marginLeft: '5%',
    }),
    game_info: props => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        width: '90%',
        marginLeft: '5%',
    }),
    option: props => ({
        fontSize: props.fontSize,
        height: '0.5em',
    }),
    button: props => ({
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
        width: '100%',
        height: '100%',
    }),
    text: props => ({
        fontSize: props.fontSize*0.9,
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].button_text,
    }),
})