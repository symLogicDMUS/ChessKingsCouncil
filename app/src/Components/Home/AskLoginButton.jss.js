import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    backdrop: props => ({
       width: '100vw',
       height: '100vh',
       position: 'absolute',
       left: 0,
       top: 0,
    }),
    cancel_button: props => ({
        height: 40,
        color: '#f44336',
        borderColor: '#f44336',
        '@media screen and (max-width: 600px)': {
            margin: 8,
            width: 220,
        },
    }),
    icon: props => ({
        width: 18,
        height: 18,
        marginLeft: 'auto',
        marginRight: 'auto',
    }),
    text: props => ({
        color: '#fff'
    }),
    dialog_window: props => ({
        backgroundColor: '#333333',
    }),
    title: props => ({
        color: '#fff',
    }),
    dialog_actions: props => ({
        justifyContent: 'space-between',
        paddingLeft: 24,
        paddingRight: 24,
        '@media screen and (max-width: 600px)': {
            flexDirection: 'column',
        },
    }),
}, {index: 1});