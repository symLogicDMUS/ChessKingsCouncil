import {makeStyles} from "@material-ui/core/styles";
import {viewWidth} from "../../helpers/windowMeasurments";
import {themes} from "../../styles/themes.jss";

export const toolButtonsDrawerWidth = viewWidth()*0.135;

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        flexShrink: 0,
        width: toolButtonsDrawerWidth,
        whiteSpace: 'nowrap',
    },
    drawerPaper: props => ({
        backgroundColor: themes[props.theme].fill2,
    }),
    drawerOpen: {
        width: toolButtonsDrawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    chevron: {
        color: themes[props.theme].text,
    },
    chevronClosed: {
      margin: 'auto',
    },
    chevronOpen: {
      marginRight: 'auto',
    },
    content: {
        flexGrow: 1,
    },
}), {index: 1});