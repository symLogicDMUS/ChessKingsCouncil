import {makeStyles} from "@material-ui/core/styles";
import {navBarButtonHeight} from "../../Reuseables/NavBar/NavBarButton.jss";

export const useStyles = makeStyles({
    background: props => ({
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: 0,
        zIndex: -1,
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
        height: navBarButtonHeight,
        width: '100vw',
    }),
    lgScreenBar: props => ({
        height: 37,
        width: '100vw',
    }),
}, {index: 1});