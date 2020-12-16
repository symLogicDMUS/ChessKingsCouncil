import {makeStyles} from "@material-ui/core/styles";
import {availWidth} from "../helpers/windowMeasurments";

export const drawerWidth = availWidth() * 0.23;

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: props =>  ({
        width: `calc(100% - ${drawerWidth}px)`,
        marginRight: props.drawerType === 'right' ?  drawerWidth : 0,
        marginLeft: props.drawerType === 'left' ? drawerWidth : 0,
    }),
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#515151'
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    appbar: {
        backgroundColor: '#515151',
        color: '#b6b6b6',
        fontFamily: 'Roboto-Light, Roboto'
    },
}));