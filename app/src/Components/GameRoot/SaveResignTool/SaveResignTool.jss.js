import makeStyles from "@material-ui/core/styles/makeStyles";
import { themes } from "../../styles/themes/themes.jss";
import { lgScreenItemWidth, marginBottom } from "../GameRoot.jss";

export const useStyles = makeStyles(
    {
        save_resign_tool: (props) => ({
            width: lgScreenItemWidth,
            display: "flex",
            fontSize: "2vh",
            flexWrap: "nowrap",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: marginBottom,
            paddingTop: "0.65vw",
            paddingBottom: "0.35vw",
            paddingLeft: "0.3vw",
            paddingRight: "0.3vw",
            borderTop: `0.05rem solid ${themes[props.theme].outline}`,
            borderBottom: `0.05rem solid ${themes[props.theme].outline}`,
        }),
        label: (props) => ({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }),
        icon: (props) => ({
            color: themes[props.theme].text,
            width: "3.25vw",
            height: "3.25vw",
        }),
        text: (props) => ({
            fontSize: "1.2vw",
            fontFamily: "Roboto-Light, Roboto",
            color: themes[props.theme].button_text,
        }),
    },
    { index: 1 }
);
