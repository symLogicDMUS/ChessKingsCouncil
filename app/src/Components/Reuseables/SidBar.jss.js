import {themes} from "../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles"
import {availHeight} from "../helpers/windowMeasurments";
import {fontSize002} from "../styles/fontSizes.jss";
import {drawerWidth} from "./PermanentDrawer.jss";

export const sideBarHeight = availHeight() * 0.9;
export const sideBarWidth = drawerWidth * 0.6;
const z = 5;

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        zIndex: z,
    },
    drawer: {
        display: 'flex',
        zIndex: z,
        flexShrink: 0,
    },
    drawerPaper: props => ({
        width: sideBarWidth,
        zIndex: z,
        backgroundColor: themes[props.theme].fill,
    }),
    toolbar: {
        fontSize: fontSize002,
        height: '3em',
    },
    appbar: {
        zIndex: z,
        color: '#b6b6b6',
        backgroundColor: '#515151',
        fontFamily: 'Roboto-Light, Roboto'
    },
}), {index: 1});

