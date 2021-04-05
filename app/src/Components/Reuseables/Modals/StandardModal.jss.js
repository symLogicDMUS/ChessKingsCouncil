import makeStyles from "@material-ui/core/styles/makeStyles";
import {modal} from "../../helpers/modal.jss";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    modal: props => ({
        ...modal,
        zIndex: 7,
    }),
    window: props => ({
        fontSize: '2vh',
        padding: '2vh',
        display: 'flex',
        borderRadius: '0.35em',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: themes[props.theme].fill,
        border: `0.075em solid ${themes[props.theme].odd_row}`,
        '@media screen and (min-width: 960px)': {
            width: '33.333vw',
            height: '33.333vh',
        },
        '@media screen and (max-width: 960px)': {
            width: '98vw',
            height: '40vh',
        },
    }),
    top_area: props => ({
        fontSize: '2vh',
        height: '1.5em',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
    }),
    title: props => ({
        fontSize: '2vh',
        textAlign: 'center',
        marginBottom: '2vh',
        color: themes[props.theme].text,
    }),
    paragraph: props => ({
        flexGrow: 100,
        overflow: 'hidden',
        marginBottom: '2vh',
        color: themes[props.theme].text,
    }),
    buttons: props => ({
        fontSize: '2vh',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignContent: 'center',
        justifyContent: 'center',
    }),
    close: props => ({
        width: '1.2rem',
        height: '1.2rem',
    }),
    close_icon: props => ({
       width: '1rem',
       height: '1rem',
    }),
    button: props => ({
        fontSize: '2vh',
        width: '7.5em',
        height: '2em',
    }),
    yes_button: props => ({
       marginRight: '1em',
    }),
    no_button: props => ({
        marginLeft: '1em',
    }),
}, {index: 1});