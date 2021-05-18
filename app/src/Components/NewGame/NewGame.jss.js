import {makeStyles} from "@material-ui/core/styles"

export const views = {
    position: 'fixed',
    left: '7.5vw',
    top: '7.5vw',
}

export const useStyles = makeStyles({
    item: props => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }),
    title: props => ({
        width: '100%',
        marginBottom: 26,
    }),
}, {index: 1});
