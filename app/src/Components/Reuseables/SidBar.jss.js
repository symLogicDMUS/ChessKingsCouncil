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
        zIndex: z,
        display: 'flex',
    },
    drawer: {
        zIndex: z,
        display: 'flex',
        flexShrink: 0,
    },
    drawerPaper: props => ({
        zIndex: z,
        width: sideBarWidth,
        backgroundColor: themes[props.theme].fill,
    }),
    toolbar: {
        fontSize: fontSize002,
        height: '3em',
    },
}), {index: 1});

