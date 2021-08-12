import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";

export const useStyles = makeStyles(
    {
        square: (props) => ({
            zIndex: 3,
            position: "fixed",
            width: props.sqrSize,
            height: props.sqrSize,
            "@media screen and (max-width: 960px)": {
                border: `0.2em solid ${themes[props.theme].sqr_border}`,
            },
            "@media screen and (min-width: 960px)": {
                border: `0.35em solid ${themes[props.theme].sqr_border}`,
            },
        }),
    },
    { index: 1 }
);
