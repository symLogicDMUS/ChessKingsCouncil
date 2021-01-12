import {makeStyles} from "@material-ui/core/styles";
import {availWidth} from "../helpers/windowMeasurments";
import {themes} from "../styles/themes.jss";
import {sideBarWidth} from "./SidBar.jss";

export const drawerWidth = availWidth() * 0.23;
export const drawerItemWidth = drawerWidth * 0.95;
const z = 5;

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        zIndex: z,
    },
    appBar: props =>  ({
        zIndex: z,
        width: `calc(100% - ${sideBarWidth}px)`,
    }),
    drawer: props => ({
        zIndex: z,
        width: props.width,
        flexShrink: 0,
    }),
    drawerPaper: props => ({
        zIndex: z,
        width: props.width,
        backgroundColor: themes[props.theme].fill,
    }),
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    appbar_content: props => ({
        zIndex: z,
        color: themes[props.theme].text,
        backgroundColor: themes[props.theme].fill,
        fontFamily: 'Roboto-Light, Roboto',
    }),
}));
