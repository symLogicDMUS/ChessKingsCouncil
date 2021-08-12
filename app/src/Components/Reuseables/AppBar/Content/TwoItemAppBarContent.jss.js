import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../../styles/themes/themes.jss";

export const useStyles = makeStyles(
    {
        content: (props) => ({
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignItems: "center",
            justifyContent: "space-between",
        }),
        icon: (props) => ({
            color: themes[props.theme].text,
            fontSize: "1.1rem",
        }),
    },
    { index: 1 }
);
