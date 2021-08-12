import { themes } from "../../styles/themes/themes.jss";
import { makeStyles } from "@material-ui/core/styles";
import { lgScreenItemWidth } from "../GameRoot.jss";

export const useStyles = makeStyles(
    {
        captured_piece_images: (props) => ({
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
        }),
        caption: (props) => ({
            flexGrow: 2,
            fontSize: "1rem",
            textAlign: "center",
            transform: "translate(-0.5em, 0)",
            color: themes[props.theme].text,
            fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
        }),
        outlined_box: (props) => ({
            fontSize: "1.75vh",
            borderRadius: "0.25em",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            border: `0.05em solid ${themes[props.theme].outline}`,
        }),
        white_captured: (props) => ({
            marginBottom: "0.65rem",
            "@media screen and (min-width: 960px)": {
                marginTop: "0.5vw",
            },
        }),
        black_captured: (props) => ({
            marginTop: "0.65rem",
        }),
        label: (props) => ({
            fontSize: "0.95em",
            lineHeight: "1em",
            paddingLeft: "0.3em",
            paddingRight: "0.3em",
            color: themes[props.theme].text,
            backgroundColor: themes[props.theme].fill2,
            transform: "translate(0.65em, -0.65em)",
        }),
        piece_list_area: (props) => ({
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingBottom: "1rem",
        }),
        piece_list: (props) => ({
            flexGrow: 10,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "flex-start",
            transform: "translate(0, -0.5em)",
            "@media screen and (max-width: 960px)": {
                width: "90%",
            },
            "@media screen and (min-width: 960px)": {
                width: lgScreenItemWidth,
            },
        }),
        empty_list: (props) => ({
            "@media screen and (max-width: 960px)": {
                width: "95%",
            },
            "@media screen and (min-width: 960px)": {
                width: lgScreenItemWidth,
            },
            height: 26.5,
        }),
        piece: (props) => ({
            height: 26,
            marginLeft: "0.2rem",
            marginTop: "0.2rem",
        }),
    },
    { index: 1 }
);
