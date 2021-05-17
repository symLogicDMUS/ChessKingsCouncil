import { makeStyles } from "@material-ui/core/styles";
import {navBarButtonHeight} from "./NavBarButton.jss";
import {themes} from "../../styles/themes/themes.jss";

export const marginLeftZero = {
    marginLeft: 0,
}

export const buttonFill = (theme) => ({
    backgroundColor: themes[theme].button_fill,
});

export const useStyles = makeStyles({
    nav_row: props => ({
        display: 'flex',
        width: '100vw',
        flexDirection: 'row',
        flexWrap: 'nowrap',
    }),
    full_width: props => ({
        position: 'fixed',
        top: 0,
    }),
    nav_drawer: props => ({
        width: "100%",
        flexDirection: 'column',
    }),
    sign_out_button: props => ({
        cursor: 'pointer',
        height: navBarButtonHeight,
        background: themes[props.theme].fill,
        borderRadius: 0,
        flexGrow: 10,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '&:hover': {
            backgroundColor: themes[props.theme].button_hover_fill,
        },
        "& .MuiListItemText-primary": {
            fontSize: '1.1rem',
            height: '1.1rem',
            lineHeight: '1.1rem',
            color: themes[props.theme].text,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
        "& .MuiListItemIcon-root": {
            marginRight: 12,
            width: '1rem',
            height: '1rem',
            minWidth: 'unset',
        },
        "& .MuiSvgIcon-root": {
            width: '1rem',
            height: '1rem',
            color: themes[props.theme].text,
        },
    }),
}, {index: 1});