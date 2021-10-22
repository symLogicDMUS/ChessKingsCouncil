import makeStyles from "@material-ui/core/styles/makeStyles";
import { modal } from "../../helpers/modal.jss";
import { themes } from "../../styles/themes/themes.jss";
import { lighten } from "@material-ui/core/styles";

export const useStyles = makeStyles(
    {
        root: (props) => ({
            "& .MuiDialogTitle-root": {
                paddingTop: 0,
            },
        }),
        backdrop: (props) => ({
            zIndex: 7,
        }),
        window: (props) => ({
            backgroundColor: themes[props.theme].fill,
            border: `0.075em solid ${themes[props.theme].odd_row}`,
        }),
        top_area: (props) => ({
            fontSize: "0.8rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
        }),
        title: (props) => ({
            color: lighten(themes[props.theme].text, 0.35),
        }),
        paragraph: (props) => ({
            color: themes[props.theme].text,
        }),
        buttons: (props) => ({
            display: "flex",
            flexDirection: "row",
            flexWrap: "no-wrap",
            alignContent: "center",
            justifyContent: "center",
        }),
        close: (props) => ({
            width: "1.2rem",
            height: "1.2rem",
        }),
        close_icon: (props) => ({
            width: "1rem",
            height: "1rem",
        }),
        button: (props) => ({
            width: "6.5rem",
        }),
        primary: (props) => ({
            color: themes[props.theme].button_text,
            backgroundColor: themes[props.theme].button_fill,
            marginRight: 12,
        }),
        secondary: (props) => ({
            color: themes[props.theme].modal_actions,
            marginLeft: 12,
        }),
    },
    { index: 1 }
);
