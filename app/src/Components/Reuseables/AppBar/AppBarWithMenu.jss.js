import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

const drawerWidth = 360;

export const useStyles = makeStyles((theme) => ({
    root: props => ({
        flexGrow: 1,
    }),
    menuButton: props => ({
        color: themes[props.theme].text,
        marginRight: theme.spacing(2),
    }),
    title: props =>  ({
        color: themes[props.theme].text,
        flexGrow: 1,
    }),
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));