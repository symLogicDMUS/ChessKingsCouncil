import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";

export const useStyles = makeStyles(
    {
        icon_window: (props) => ({
            borderRadius: "0.25rem",
            backgroundColor: themes[props.theme].fill,
            border: `0.065rem solid ${themes[props.theme].odd_row}`,
        }),
        img_windows: (props) => ({
            display: "flex",
            flexDirection: "row",
        }),
    },
    { index: 1 }
);
