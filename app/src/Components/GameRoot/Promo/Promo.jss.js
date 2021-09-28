import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";
import { fade } from "@material-ui/core";

export const useStyles = makeStyles(
    {
        modal: (props) => ({
            zIndex: 8,
        }),
        content: (props) => ({
            position: "absolute",
            "@media screen and (max-width: 960px)": {
                left: `30vw`,
                top: `calc(50vh + 20vw)`,
            },
            "@media screen and (min-width: 960px)": {
                left: "40vw",
                top: `calc(50vh + 10vw)`,
            },
        }),
        promote_button: (props) => ({
            padding: "0.5vw",
            cursor: "pointer",
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignItems: "center",
            "&:hover": {
                backgroundColor: fade("#000", 0.1),
            },
            "@media screen and (max-width: 960px)": {
                width: "40vw",
            },
            "@media screen and (min-width: 960px)": {
                width: "20vw",
            },
        }),
        button1: (props) => ({
            justifyContent: "center",
            paddingLeft: 24,
            paddingRight: 24,
        }),
        button2: (props) => ({
            justifyContent: "space-evenly",
        }),
        icons: (props) => ({
            display: "flex",
            flexDirection: "row",
        }),
        icon: (props) => ({
            color: "#fff",
        }),
        icon2: (props) => ({
            marginLeft: "0.5rem",
            padding: 0,
            "& .MuiSvgIcon-root": {
                width: "2.25rem",
                height: "2.25rem",
                transform: "translate(0, 0.15rem)",
            },
        }),
        text: (props) => ({
            fontSize: "1.25rem",
            color: "#fff",
        }),
        piece_name: (props) => ({
            color: "#fff",
            fontSize: "2.5rem",
        }),
        piece_img: (props) => ({
            height: "2.5rem",
            width: "2.5rem",
        }),
        nav_button: (props) => ({
            color: '#fff',
            backgroundColor: "unset",
            position: "absolute",
            padding: 0,
            "@media screen and (max-width: 460px)": {
                width: "10vw",
                height: "10vw",
            },
            "@media screen and (min-width: 460px) and (max-width: 960px)": {
                width: "7.5vw",
                height: "7.5vw",
            },
            "@media screen and (min-width: 960px)": {
                height: "5vw",
                width: "5vw",
            },
        }),
        prevButton: (props) => ({
            left: "22.5vw",
            top: `calc(50vh - 2.5vw)`,
        }),
        nextButton: (props) => ({
            top: "calc(50vh - 2.5vw)",
            left: "72.5vw",
        }),
        arrow_icon: (props) => ({
            width: "95%",
            height: "95%",
        }),
    },
    { index: 1 }
);
