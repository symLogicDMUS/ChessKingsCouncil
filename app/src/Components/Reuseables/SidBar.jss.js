import {makeStyles} from "@material-ui/core/styles"
import {themes} from "../styles/themes.jss";
import {availHeight} from "../helpers/windowMeasurments";

export const sideBarHeight = availHeight() * 0.9;
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
        width: props.width,
        zIndex: z,
        backgroundColor: themes[props.theme].fill,
    }),
    toolbar: theme.mixins.toolbar,
    appbar: {
        zIndex: z,
        color: '#b6b6b6',
        backgroundColor: '#515151',
        fontFamily: 'Roboto-Light, Roboto'
    },
}));

