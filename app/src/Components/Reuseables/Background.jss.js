import {makeStyles} from "@material-ui/core/styles";
import {fontSize002} from "../styles/fontSizes.jss";

const row = () => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
})

export const useStyles = makeStyles((theme) => ({
    background_fixed: props => ({
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    }),
    background: props => ({
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '@media (max-aspect-ratio: 1/1)': {
            top: 0,
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            top: '1%',
        },
    }),
    board_pattern: props => ({
        width: '10vw',
        height: '10vw',
    }),
    row1: props => ({
        ...row(),
    }),
    row2: props => ({
        ...row(),
        marginTop: 'auto',
        // alignSelf: 'flex-end',
    }),
    toolbar: {
        fontSize: fontSize002,
        height: '3em',
    },
    drawerHeader: props => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }),
}));
