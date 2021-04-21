import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    buttons: props => ({
        float: 'left',
        margin: '1.2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        outline: '1px dashed red',
    }),
    button1: props => ({
        marginBottom: '1rem',
    }),
    button2: props => ({
        marginTop: '1rem',
    }),
}, {index: 1});