import {themes} from "../../styles/themes/themes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const navBarButtonHeight = '2.5rem';

export const useStyles = makeStyles({
    nav_bar_button: props => ({
        width: 'auto',
        cursor: 'pointer',
        minWidth: 'unset',
        paddingLeft: 12,
        paddingRight: 12,
        height: navBarButtonHeight,
        background: themes[props.theme].fill,
        '&:hover': {
            backgroundColor: themes[props.theme].button_hover_fill,
        },
        "& .MuiListItemText-primary": {
            fontSize: '1.05rem',
            height: '1.06rem',
            lineHeight: '1.05rem',
            minWidth: 'unset',
            width: 'auto',
            color: themes[props.theme].text,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
        "& .MuiListItemIcon-root": {
            marginRight: '0.5rem',
            width: '0.8rem',
            height: '0.8rem',
            minWidth: 'unset',
        },
        "& .MuiSvgIcon-root": {
            width: '0.8rem',
            height: '0.8rem',
            minWidth: 'unset',
            color: themes[props.theme].text,
        },
    }),
    row_direction: props => ({
        flexGrow: 10,
        minWidth: 'unset',
    }),
    hidden: props => ({
       display: 'none',
    }),
}, {index: 1});