import { themesJss } from "../styles/themes.jss";
import { makeStyles } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.outline,
        "&$checked": {
            color: theme.checkmark,
        },
    },
    checked: {},
}));

export const checkBoxStyle = {
    desktop: {
        label: function (fontSize, fontFamily, theme) {
            return {
                fontFamily: fontFamily,
                fontSize: fontSize,
                display: "inline-block",
                lineHeight: 1,
                color: themesJss[theme].font
            };
        },
        checkbox: function (fontSize, fontFamily, theme) {
            return {
                "not-checked": {
                    fontSize: fontSize,
                    fontFamily: fontFamily,
                    width: "1.5em",
                    height: "1.5em",
                    transform: "translate(0, -0.12em)",
                    color: themesJss[theme].outline
                },
                checked: {
                    fontSize: fontSize,
                    fontFamily: fontFamily,
                    width: "1.5em",
                    height: "1.5em",
                    transform: "translate(0, -0.12em)",
                    color: themesJss[theme].checkmark
                },
            };
        },
    },
    /*
    mobile: {},
     */
};
