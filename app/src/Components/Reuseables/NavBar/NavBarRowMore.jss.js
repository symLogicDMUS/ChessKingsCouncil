import {lighten, makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";
import {navBarButtonHeight} from "./NavBarButton.jss";

export const useStyles = makeStyles({
    icon_button: props => ({
        color: themes[props.theme].text,
        backgroundColor: themes[props.theme].fill,
        height: navBarButtonHeight,
        borderRadius: 0,
        '&:hover':{
            backgroundColor: lighten(themes[props.theme].fill, 0.1),
        },
    }),
    button: props => ({
        '&:hover':{
            background: themes[props.theme].button_fill,
        },
    }),
}, {index: 1});