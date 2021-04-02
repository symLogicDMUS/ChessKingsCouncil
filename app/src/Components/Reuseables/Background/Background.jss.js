import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    background: props => ({
        zIndex: -1,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: 0,
    }),
    board_pattern: props => ({
        width: '7.5vw',
        height: '7.5vw',
    }),
    row: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
    row2: props => ({
        marginTop: 'auto',
    }),
    toolbar: {
        height: 48,
        width: '100vw',
    },
    navbar: props => ({
        fontSize: '1vw',
        height: '2.35em',
        width: '100vw',
    }),
}), {index: 1});
