import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

const width = '98vw';
const left = '1.5vw';

export const useStyles = makeStyles({
    button: props => ({
        marginRight: 'auto',
        marginLeft: 'auto',
    }),
    icon: props => ({
        height: 18,
        width: 18,
        color: themes[props.theme].text,
    }),
    text: props => ({
        fontSize: '0.2rem',
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
    }),
    label: props => ({
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
    }),
    tool_window: props => ({
        position: 'fixed',
        bottom: '10vw',
        width: '98vw',
        left: '1vw',
        borderRadius: '0.5rem',
        backgroundColor: themes[props.theme].fill,
    }),
    x_icon_flexbox: props => ({
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }),
    tool_flexbox: props => ({
        padding: '2vw',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
    }),
    active_tool: props => ({
       color: themes[props.theme].sqr_hover_alt,
    }),
}, {index: 1});