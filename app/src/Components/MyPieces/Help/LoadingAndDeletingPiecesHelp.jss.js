import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    buttons: props => ({
        float: 'left',
        marginRight: '1.2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
    button1: props => ({
        marginBottom: '0.5rem',
    }),
    button2: props => ({
        marginTop: '0.5rem',
    }),
}, {index: 1});