import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    help_button: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'translate(0, -0.15rem)'
    }),
    icon: props => ({
       marginRight: '0.25rem',
    }),
}, {index: 1});