import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../styles/themes/themes.jss";

export const useStyles = makeStyles({
    root1: props => ({
        '@media screen and (min-width: 960px)': {
            "& .MuiToolbar-gutters": {
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0,
            },
        },
    }),
    root2: props => ({
        '@media screen and (min-width: 960px)': {
            "& .MuiToolbar-gutters": {
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 24,
                paddingRight: 150.5,
            },
        },
    }),
    tab_bar: props => ({
        width: "100vw",
        backgroundColor: themes[props.theme].fill,
        color: themes[props.theme].text,
        position: 'fixed',
        display: 'flex',
    }),
    tabs: props => ({
        flexGrow: 10,
    }),
    adjuster: props => ({
       height: 48,
       borderBottom: themes[props.theme].outline_alt2,
    }),
    menu_icon: props => ({
        color: themes[props.theme].text,
    }),
    close_icon: props => ({
       color: themes[props.theme].modal_actions,
    }),
}, {index: 1});