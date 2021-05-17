import {lighten, makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";
import {navBarButtonHeight} from "./NavBarButton.jss";

export const useStyles = makeStyles((theme) => ({
    root: props => ({
        "& .MuiTabScrollButton-root": {
            color: '#f50057',
            backgroundColor: lighten(themes[props.theme].fill, 0.08),
            opacity: 1,
            height: navBarButtonHeight,
        },
        "& .MuiTab-wrapper":{
            alignItems: 'center',
            opacity: 1,
            padding: 0,
        },
        "& .MuiTab-root": {
            height: 48,
            padding: 0,
            opacity: 1,
        },
    }),
    nav_tab_row: props => ({
        display: 'flex',
        width: '100vw',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        height: navBarButtonHeight,
        backgroundColor: themes[props.theme].fill,
        opacity: 1,
    }),
}), {index: 1});