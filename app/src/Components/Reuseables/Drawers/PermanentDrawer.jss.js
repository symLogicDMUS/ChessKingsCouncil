import {makeStyles} from "@material-ui/core/styles";
import {viewWidth} from "../../helpers/windowMeasurments";
import {themes} from "../../styles/themes/themes.jss";

const z = 5;
export const drawerWidth = viewWidth() * 0.25;
export const sideBarWidth = drawerWidth * 0.55;

export const useStyles = makeStyles({
    root: {
        zIndex: z,
        display: 'flex',
    },
    appBar: props => ({
        zIndex: z,
        width: `calc(100% - ${sideBarWidth}px)`,
        fontSize: '2vh',
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
        backgroundColor: themes[props.theme].fill2,
    }),
    // necessary for content to be below app bar
    toolbar: {
        fontSize: '2vh',
        height: '3em',
    },
    drawerContent: props => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between",
        height: '90vh',
    }),
    appbarContent: props => ({
        zIndex: z,
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        width: `calc(100% - ${drawerWidth}px)`,
    }),
}, {index: 1});