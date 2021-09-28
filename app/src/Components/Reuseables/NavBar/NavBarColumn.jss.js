import { lighten, makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";
import { navBarButtonHeight } from "./NavBarButton.jss";

export const useStyles = makeStyles(
    {
        root: (props) => ({
            "& .MuiTabScrollButton-root": {
                color: "#f50057",
                // backgroundColor: lighten(themes[props.theme].fill, 0.08),
                opacity: 1,
            },
            "& .MuiTab-wrapper": {
                alignItems: "flex-start",
                opacity: 1,
                padding: 0,
            },
            "& .MuiTab-root": {
                height: 48,
                padding: 0,
                opacity: 1,
            },
        }),
        nav_tab_column: (props) => ({
            width: "100%",
            flexDirection: "column",
        }),
    },
    { index: 1 }
);
