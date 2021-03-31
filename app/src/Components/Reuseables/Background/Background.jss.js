import {makeStyles} from "@material-ui/core/styles";
import {fontSize002} from "../../styles/fontSizes.jss";

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
        '@media screen and (max-width: 960px)': {
            width: '7.5vw',
            height: '7.5vw',
        },
        '@media screen and (min-width: 960px)': {
            width: '10vw',
            height: '10vw',
        },
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
        fontSize: fontSize002,
        height: '3em',
    },
    drawerHeader: props => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }),
}), {index: 1});
