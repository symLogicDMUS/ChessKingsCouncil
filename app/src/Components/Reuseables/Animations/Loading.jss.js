import { makeStyles } from "@material-ui/core/styles";

export const variants = {
    initial: {
        pathLength: 0,
        fill: "rgba(0, 0, 0, 0)"
    },
    animate: {
        pathLength: 1,
        fill: "rgba(0, 0, 0, 1)",
    }
}

export const transition = { repeat: Infinity, duration: 2.5 }

export const useStyles = makeStyles((theme) => ({
    body: props => ({
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }),
    animation: props => ({
       margin: 'auto',
    }),
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    board_pattern_area: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
    row1: props => ({
        marginBottom: 'auto',
    }),
    row2: props => ({
        marginTop: 'auto',
    }),
    content: props => ({
        width: '100%',
        flexGrow: 100,
        paddingTop: '7.5vw',
        paddingBottom: '7.7vw',
        display: 'flex',
        flexDirection: 'column',
    }),
    site_title: props => ({
        width: '100%',
    }),
    paragraph: props => ({
        color: '#000',
    }),
}), {index: 1});