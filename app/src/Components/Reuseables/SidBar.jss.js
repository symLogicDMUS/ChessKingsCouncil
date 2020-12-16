import {makeStyles} from "@material-ui/core/styles"
import {drawerWidth} from "./PermanentDrawer.jss";

export const sidBarWidth = drawerWidth * 0.75;

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        display: 'flex',
        flexShrink: 0,
    },
    drawerPaper: {
        width: sidBarWidth,
        backgroundColor: '#414141',
    },
    toolbar: theme.mixins.toolbar,
    appbar: {
        backgroundColor: '#515151',
        color: '#b6b6b6',
        fontFamily: 'Roboto-Light, Roboto'
    },
}));
