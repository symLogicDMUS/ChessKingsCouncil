import {makeStyles} from "@material-ui/core/styles"
import {themes} from "../styles/themes.jss";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        zIndex: 1,
    },
    drawer: {
        display: 'flex',
        zIndex: 1,
        flexShrink: 0,
    },
    drawerPaper: props => ({
        width: props.width,
        zIndex: 1,
        backgroundColor: themes[props.theme].fill,
    }),
    toolbar: theme.mixins.toolbar,
    appbar: {
        zIndex: 1,
        color: '#b6b6b6',
        backgroundColor: '#515151',
        fontFamily: 'Roboto-Light, Roboto'
    },
}));
