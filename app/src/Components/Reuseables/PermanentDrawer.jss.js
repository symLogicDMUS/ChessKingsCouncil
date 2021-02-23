import {makeStyles} from "@material-ui/core/styles";
import {availWidth} from "../helpers/windowMeasurments";
import {themes} from "../styles/themes.jss";
import {fontSize002} from "../styles/fontSizes.jss";

export const drawerWidth = availWidth() * 0.23;
export const drawerItemWidth = drawerWidth * 0.95;
export const sideBarWidth = drawerWidth * 0.55;
const z = 5;

export const useStyles = makeStyles({
    root: {
        zIndex: z,
        display: 'flex',
    },
    appBar: props => ({
        zIndex: z,
        width: `calc(100% - ${sideBarWidth}px)`,
        fontSize: fontSize002,
        height: '3em',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        background: themes[props.theme].fill,
    }),
    drawerPaper: props => ({
        zIndex: z,
        width: drawerWidth,
        backgroundColor: themes[props.theme].fill,
    }),
    // necessary for content to be below app bar
    toolbar: {
        fontSize: fontSize002,
        height: '3em',
    },
    drawerContent: props => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between",
        height: '90vh'
    }),
    appbarContent: props => ({
        zIndex: z,
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        width: `calc(100% - ${drawerWidth}px)`,
    }),
}, {index: 1});