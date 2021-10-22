import { darken, makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";
import { miniVariantIconsColumnWidth } from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

export const useStyles = makeStyles(
    {
        window: (props) => ({
            display: "flex",
            borderRadius: "0.25rem",
            padding: "1.2rem",
            flexDirection: "column",
            backgroundColor: themes[props.theme].fill,
            border: `0.075em solid ${themes[props.theme].odd_row}`,
            width: `calc(99.75vw - ${miniVariantIconsColumnWidth}px)`,
            height: "40vh",
        }),
        buttons: (props) => ({
            width: "100%",
            marginTop: "auto",
            display: "flex",
            flexDirection: "row",
            flexWrap: "no-wrap",
            alignContent: "center",
            justifyContent: "center",
        }),
        button: (props) => ({}),
        primary: (props) => ({
            marginLeft: "0.6rem",
            backgroundColor: themes[props.theme].button_fill,
        }),
        secondary: (props) => ({
            marginRight: "0.6rem",
            color: themes[props.theme].button_fill,
        }),
    },
    { index: 1 }
);
