import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    my_pieces: props => ({
        overflowX: 'hidden',
        width: '100vw',
        flexGrow: 3,
        display: 'flex',
        flexDirection: 'column',
    }),
    piece_profiles: props => ({
        margin: 'auto',
        borderRadius: '0.5rem',
    }),
}, {index: 1});
