import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";

export const useStyles = makeStyles(
    {
        icon: (props) => ({
            width: 18,
            height: 18,
        }),
        text: (props) => ({
            "& .MuiListItemText-primary": {
                fontSize: 16,
                height: 24,
            },
        }),
        inactive_color: (props) => ({
            color: themes[props.theme].text,
        }),
        active_color: (props) => ({
            color: themes[props.theme].sqr_hover_alt,
        }),
        non_descender: (props) => ({
            paddingTop: 2,
        }),
    },
    { index: 1 }
);
