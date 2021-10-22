import { lighten, makeStyles } from "@material-ui/core/styles";
import { rfToGridLoc } from "../../helpers/crdCnvrt";
import { themes } from "../../styles/themes/themes.jss";

export const useStyles = makeStyles(
    {
        square: (props) => ({
            zIndex: 2,
            minWidth: "unset",
            minHeight: "unset",
            display: "flex",
            flexDirection: "column",
            ...rfToGridLoc(props.rf),
            backgroundColor: themes[props.theme].location_sqr,
            "& .MuiTouchRipple-root": {
                color: themes[props.theme].sqr_text,
            },
        }),
        text: (props) => ({
            "@media screen and (max-width: 960px)": {
                fontSize: "3vw",
            },
            "@media screen and (min-width: 960px)": {
                fontSize: "3.5vw",
            },
            margin: "auto",
            color: themes[props.theme].text
        }),
    },
    { index: 1 }
);
