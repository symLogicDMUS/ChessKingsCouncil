import {makeStyles} from "@material-ui/core/styles";
import {viewWidth} from "../../helpers/windowMeasurments";
import {themes} from "../../styles/themes.jss";

const z = 5;
export const appBarHeight = 48;
export const toolDrawerWidth = viewWidth() * 0.25;
export const navDrawerWidth = viewWidth() * 0.15;

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        /*
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
        */
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: navDrawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${navDrawerWidth}px)`,
            marginLeft: navDrawerWidth,
        },
        background: themes[props.theme].fill,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        color: themes[props.theme].text,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar, //TODO: change to own class object when need consistent height. see PermanentDrawer.jss
    drawerPaper: props => ({
        backgroundColor: themes[props.theme].fill2,
    }),
    navDrawerPaper: {
        width: navDrawerWidth,
    },
    toolDrawerPaper: {
        width: toolDrawerWidth,
    },
    content: {
        flexGrow: 1,
        // padding: theme.spacing(3),
    },
}), {index: 1});