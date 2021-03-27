import {makeStyles} from "@material-ui/core/styles";
import {viewWidth} from "../../helpers/windowMeasurments";
import {themes} from "../../styles/themes.jss";

const z = 5;
export const appBarHeight = 48;
export const toolDrawerWidth = viewWidth() * 0.25;

//replaced props.navDrawerWidth with the const value 240
export const useStyles = makeStyles((theme) => ({
    root: props => ({
        display: 'flex',
        minHeight: 48,
        height: 48,
        '@media screen and (min-width: 600px)': {
            minHeight: 48,
            '& .MuiToolbar-regular': {
                minHeight: 48,
                height: 48,
            },
        },
    }),
    drawer: props => ({
        [theme.breakpoints.up('md')]: {
            width: 240,
            flexShrink: 0,
        },
    }),
    appBar: props => ({
        marginLeft: 240,
        background: themes[props.theme].fill,
    }),
    appBarCompressed: props => ({
        width: `calc(100% - ${240}px)`,
    }),
    appBarRelaxed: props => ({
        width: '100%',
    }),
    menuButton: props => ({
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        color: themes[props.theme].text,
    }),
    //TODO: change to own class object when need consistent height. see PermanentDrawer.jss
    toolbar: {
        minHeight: 48,
        height: 48,
    },
    drawerPaper: props => ({
        backgroundColor: themes[props.theme].fill2,
    }),
    navPermanentPaper: props => ({
        width: 240,
        '@media screen and (max-width: 960px)': {
            width: 0,
        },
    }),
    navPersistentPaper: props => ({
        width: 240,
    }),
    toolDrawerPaper: props => ({
        width: toolDrawerWidth,
    }),
    tools: props => ({
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
}), {index: 1});