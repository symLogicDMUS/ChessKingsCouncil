import { themes } from "../styles/themes.jss";
import { makeStyles } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

// export const useStyles = makeStyles((theme) => ({
//     root: {
//         color: theme.outline,
//         "&$checked": {
//             color: theme.checkmark,
//         },
//     },
//     checked: {},
// }));

const checkbox = {
    width: "1.5em",
    height: "1.5em",
    transform: "translate(0, -0.12em)",
}

export const useStyles = makeStyles({
    // desktop: {
    label: {
        fontFamily: (props) => props.fontFamily,
        fontSize: (props) => props.fontSize,
        display: "inline-block",
        lineHeight: 1,
        // color: themesJss[theme].font
    },
    // checkbox: {
    "not-checked": {
        fontSize: (props) => props.fontSize,
        fontFamily: (props) => props.fontFamily,
        ...checkbox
        // color: themesJss[theme].outline
    },
    checked: {
        fontSize: (props) => props.fontSize,
        fontFamily: (props) => props.fontFamily,
        ...checkbox
        // color: themesJss[theme].checkmark
    },
    // },
    // },
    /*
    mobile: {},
     */
});
