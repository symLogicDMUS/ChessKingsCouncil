import {makeStyles} from "@material-ui/core/styles";
import {availHeight, availWidth} from "../helpers/windowMeasurments";
import {themes} from "../styles/themes.jss";


export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: props =>  ({
        width: `calc(100% - ${props.width}px)`,
        marginRight: props.drawerType === 'right' ?  props.width : 0,
        marginLeft: props.drawerType === 'left' ? props.width : 0,
    }),
    drawer: props => ({
        width: props.width,
        height: availHeight()*0.98,
        flexShrink: 0,
    }),
    drawerPaper: props => ({
        width: props.width,
        height: availHeight()*0.98,
        backgroundColor: themes[props.theme].fill,
    }),
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    appbar: props => ({
        color: themes[props.theme].text,
        backgroundColor: themes[props.theme].fill,
        fontFamily: 'Roboto-Light, Roboto'
    }),
}));