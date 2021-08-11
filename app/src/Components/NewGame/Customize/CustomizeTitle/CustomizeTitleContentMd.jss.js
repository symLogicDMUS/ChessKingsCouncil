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
            marginRight: 32,
            "& .MuiSvgIcon-root": {
                color: themes[props.theme].text,
            },
        }),
    },
    { index: 1 }
);
