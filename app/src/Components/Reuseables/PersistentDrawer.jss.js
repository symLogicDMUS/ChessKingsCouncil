import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../styles/themes.jss";
import {availWidth} from "../helpers/windowMeasurments";

export const drawerWidth = availWidth()*0.45;

export const useStyles = makeStyles((theme) => ({
    root: props => ({
        display: 'flex',
    }),
    appBar: props => ({
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: themes[props.theme].fill,
        color: themes[props.theme].text,
    }),
    appBarShift: props => ({
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    menuButton: props => ({
        marginRight: theme.spacing(0.25),
    }),
    hide: props => ({
        display: 'none',
    }),
    drawer: props => ({
        width: drawerWidth,
        flexShrink: 0,
    }),
    drawerPaper: props => ({
        width: drawerWidth,
        backgroundColor: themes[props.theme].fill,
    }),
    drawerHeader: props => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }),
    content: props => ({
        flexGrow: 1,
        padding: theme.spacing(props.spacing === undefined ? 1 : props.spacing),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    }),
    contentShift: props => ({
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
    open_close_icons: props => ({
       color: themes[props.theme].text,
    }),
}));