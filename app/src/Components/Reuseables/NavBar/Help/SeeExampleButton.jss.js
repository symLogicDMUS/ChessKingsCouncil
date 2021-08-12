import { makeStyles } from "@material-ui/core/styles";
import { appBarHeight } from "../../Drawers/ResponsiveDrawer.jss";
import { themes } from "../../../styles/themes/themes.jss";

export const useStyles = makeStyles(
    {
        backdrop: (props) => ({
            zIndex: 30,
            backgroundColor: "#000",
        }),
        img_area: (props) => ({
            width: "100vw",
            display: "flex",
            top: appBarHeight,
            position: "absolute",
            border: "1px solid #262626",
            height: `calc(100vh - ${appBarHeight}px)`,
        }),
        wide_img: (props) => ({
            width: "100%",
        }),
        thin_img: (props) => ({
            height: "100%",
        }),
        src: (props) => ({
            margin: "auto",
        }),
        close: (props) => ({
            top: 0,
            zIndex: 14,
            padding: 0,
            height: 48,
            color: "#fff",
            borderRadius: 0,
            right: "0.5rem",
            position: "fixed",
            backgroundColor: "#000",
        }),
        link: (props) => ({
            display: "inline",
            marginLeft: "0.25rem",
            marginRight: "0.25rem",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: 1.5,
            boxSizing: "inherit",
            letterSpacing: "0.00938em",
            color: themes[props.theme].modal_actions,
            fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
            "&:hover": {
                textDecoration: "underline",
            },
        }),
        icon: (props) => ({
            transform: "translate(0, -0.05rem)",
        }),
        button: (props) => ({
            color: themes[props.theme].text,
        }),
        hide: (props) => ({
            display: "none",
        }),
    },
    { index: 1 }
);
