import { darken, lighten, makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";

export const useStyles = makeStyles(
    {
        page_link: (props) => ({
            width: "7.8vw",
            height: "23.6vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: '1rem',
        }),
        page_name: (props) => ({
            width: "100%",
        }),
        icon: (props) => ({
            width: "7.8vw",
            height: "7.8vw",
        }),
        normal_color: (props) => ({
            color: themes[props.theme].page_link,
        }),
        hover_color: (props) => ({
            color: darken(themes[props.theme].page_link, 0.3),
        }),
    },
    { index: 1 }
);
