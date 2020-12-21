import {makeStyles} from "@material-ui/core/styles"
import {themes} from "../styles/themes.jss";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        display: 'flex',
        flexShrink: 0,
    },
    drawerPaper: props => ({
        width: props.width,
        backgroundColor: themes[props.theme].fill,
    }),
    toolbar: theme.mixins.toolbar,
    appbar: {
        backgroundColor: '#515151',
        color: '#b6b6b6',
        fontFamily: 'Roboto-Light, Roboto'
    },
}));
