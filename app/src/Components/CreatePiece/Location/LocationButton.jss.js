import { lighten, makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";

export const frame = (theme) => ({
    display: "flex",
    flexDirection: "column",
    backgroundColor: themes[theme].location_sqr,
    padding: 0,
});

export const clickAnimation = (theme) => ({
    backgroundColor: [
        lighten(themes[theme].location_sqr, 0.75),
        themes[theme].location_sqr,
    ],
});

export const currentSqr = (theme) => ({
    backgroundColor: lighten(themes[theme].location_sqr, 0.4),
});

export const useStyles = makeStyles(
    {
        button: (props) => ({
            color: themes[props.theme].text,
        }),
        button_normal: (props) => ({
            backgroundColor: themes[props.theme].fill,
        }),
        button_selected: (props) => ({
            backgroundColor: themes[props.theme].location_button_selected,
            "&:hover": {
                backgroundColor: themes[props.theme].location_button_selected,
            },
            color: themes[props.theme].button_text
        }),
        text: (props) => ({
            "@media screen and (max-width: 960px)": {
                fontSize: "3vw",
            },
            "@media screen and (min-width: 960px)": {
                fontSize: "3.5vw",
            },
            margin: "auto",
            color: lighten(themes[props.theme].sqr_hover_alt, 0.6),
        }),
    },
    { index: 1 }
);
