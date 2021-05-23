import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    tab_label: props => ({
        display: 'inline-flex',
        alignItems: 'center',
    }),
    tab_added: props => ({
        maxWidth: 80,
        overflowX: 'hidden',
        textOverflow: 'ellipsis',

    }),
}, {index: 1});