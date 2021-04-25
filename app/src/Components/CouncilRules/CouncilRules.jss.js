import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../styles/themes/themes.jss";

const drawerWidth = 215;

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
        zIndex: 10,
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
        marginRight: theme.spacing(2),
        color: themes[props.theme].text,
    }),
    hide: props => ({
        display: 'none',
    }),
    drawer: props => ({
        width: drawerWidth,
        flexShrink: 0,
    }),
    drawerPaper: props => ({
        zIndex: 12,
        width: drawerWidth,
        backgroundColor: themes[props.theme].fill,
    }),
    drawerHeader: props => ({
        display: 'flex',
        alignItems: 'center',
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }),
    content: props => ({
        flexGrow: 1,
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
    text: props => ({
        color: themes[props.theme].text,
    }),
    title: props => ({
        flexGrow: 1,
    }),
}), {index: 1});