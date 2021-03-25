import {makeStyles} from "@material-ui/core/styles";
import {viewWidth} from "../../helpers/windowMeasurments";
import {themes} from "../../styles/themes.jss";

export const appBarHeight = 48;
export const neighborWidth = viewWidth()*0.5;

export const pageTitleStyle = {
    fontWeight: 500,
};

export const useStyles = makeStyles((theme) => ({
    root: props => ({
        display: 'flex',
        justifyContent: 'center',
        "& .MuiIconButton-edgeStart": {
            marginLeft: '-20px',
        },
        "& .MuiIconButton-root":{
            width: 48,
            height: 48,
        },
        '& .MuiToolbar-regular':{
            minHeight: 'unset',
        },
    }),
    appBar: props => ({
        zIndex: 7,
        height: appBarHeight,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: themes[props.theme].fill,
        color: themes[props.theme].text,
    }),
    appBarShift: props => ({
        width: `calc(100% - ${120}px)`,
        marginLeft: 120,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    appBarNeighborShift: props => ({
        width: `calc(100% - ${neighborWidth}px)`,
        marginRight: neighborWidth,
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
        width: 120,
        flexShrink: 0,
    }),
    drawerPaper: props => ({
        width: 120,
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
        marginLeft: -120,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }),
    contentShift: props => ({
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
    openCloseIcons: props => ({
        color: themes[props.theme].text,
    }),
}), {index: 1});