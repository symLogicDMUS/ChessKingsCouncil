import {themes} from "../../../styles/themes/themes.jss";
import {makeStyles} from "@material-ui/core/styles";

const buttonHeight = '2rem';
const buttonWidth = '7.5rem';

export const useStyles = makeStyles({
    window: props => ({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 12,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: themes[props.theme].fill,
    }),
    top_area: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
    title: props => ({
       color: themes[props.theme].text,
    }),
    content: props => ({
        flexGrow: 2,
        overflow: 'scroll',
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 12,
        borderRadius: '0.25em',
        border: `0.05em solid ${themes[props.theme].outline}`,
        '@media screen and (max-width: 960px)': {
            padding: '1rem',
        },
        '@media screen and (min-width: 960px)': {
            padding: '1.5vw',
        },
    }),
    buttons: props => ({
        display: 'flex',
        justifyContent: 'center',
        marginTop: '0.1rem',
        marginBottom: '1rem',
    }),
    button: props => ({
        fontSize: '2vh',
        width: buttonWidth,
        height: buttonHeight,
    }),
    previous_button: props => ({
        marginRight: '0.5rem',
        border: `0.05em solid ${themes[props.theme].outline}`,
    }),
    next_button: props => ({
        marginLeft: '0.5rem',
        border: `0.05em solid ${themes[props.theme].outline}`,
    }),
    done_button: props => ({
        marginLeft: '1rem',
        border: `0.05em solid ${themes[props.theme].outline}`,
    }),
    button_icon: props => ({
        fontSize: '1.5vw',
    }),
}, {index: 1});