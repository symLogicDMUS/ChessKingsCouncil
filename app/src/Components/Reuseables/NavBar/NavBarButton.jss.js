import { themes } from "../../styles/themes/themes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const navBarButtonHeight = 48;

export const useStyles = makeStyles(
    {
        nav_bar_button: (props) => ({
            height: navBarButtonHeight,
            background: themes[props.theme].fill,
            "&:hover": {
                backgroundColor: themes[props.theme].button_hover_fill,
            },
            "& .MuiListItemText-primary": {
                color: themes[props.theme].text,
                textTransform: "uppercase",
                fontWeight: 500,
            },
            "& .MuiListItemIcon-root": {
                minWidth: "unset",
                width: 32,
                height: 18,
            },
            "& .MuiSvgIcon-root": {
                width: 18,
                height: 18,
                color: themes[props.theme].text,
            },
            "& .MuiTypography-root": {
                fontSize: "1rem",
                color: themes[props.theme].text,
            },
        }),
        column_direction: (props) => ({
            "& .MuiListItem-root": {
                width: "100%",
            },
        }),
        row_direction: (props) => ({}),
        hidden: (props) => ({
            display: "none",
        }),
    },
    { index: 1 }
);
