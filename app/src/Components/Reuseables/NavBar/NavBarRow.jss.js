import { lighten, makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";
import { navBarButtonHeight } from "./NavBarButton.jss";

export const marginLeftZero = {
    marginLeft: 0,
};

export const useStyles = makeStyles(
    (theme) => ({
        root: (props) => ({
            "& .MuiTabScrollButton-root": {
                color: "#f50057",
            },
            "& .MuiTab-wrapper": {
                alignItems: "center",
                opacity: 1,
                padding: 0,
            },
            "& .MuiTab-root": {
                height: 48,
                padding: 0,
                opacity: 1,
            },
        }),
        nav_tab_row: (props) => ({
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            height: navBarButtonHeight,
            backgroundColor: themes[props.theme].fill,
            opacity: 1,
        }),
        full_width: (props) => ({
            width: "100vw",
            position: "fixed",
            top: 0,
        }),
        condensed: (props) => ({
            width: `calc(100vw - 48px)`,
        }),
        nav_drawer: (props) => ({
            width: "100%",
            flexDirection: "column",
        }),
        sign_out_button: (props) => ({
            cursor: "pointer",
            height: navBarButtonHeight,
            background: themes[props.theme].fill,
            borderRadius: 0,
            flexGrow: 10,
            overflow: "hidden",
            textOverflow: "ellipsis",
            "&:hover": {
                backgroundColor: themes[props.theme].button_hover_fill,
            },
            "& .MuiListItemText-primary": {
                fontSize: "1.1rem",
                height: "1.1rem",
                lineHeight: "1.1rem",
                color: themes[props.theme].text,
                overflow: "hidden",
                textOverflow: "ellipsis",
            },
            "& .MuiListItemIcon-root": {
                marginRight: 12,
                width: "1rem",
                height: "1rem",
                minWidth: "unset",
            },
            "& .MuiSvgIcon-root": {
                width: "1rem",
                height: "1rem",
                color: themes[props.theme].text,
            },
            "& .MuiTypography-root": {
                color: themes[props.theme].text,
            },
        }),
    }),
    { index: 1 }
);
