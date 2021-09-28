import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../../styles/themes/themes.jss";
import { sqrSize } from "../CreatePieceBoard.jss";

export const spanFrame = (theme) => ({
    background: "none",
    color: themes[theme].span,
    display: "flex",
    flexDirection: "column",
    fontSize: "3.5vw",
});

export const offsetFrame = (theme) => ({
    background: "none",
    color: themes[theme].offset,
    display: "flex",
    flexDirection: "column",
});

export const useStyles = makeStyles(
    {
        sqr_text: (props) => ({
            margin: "auto",
            "@media screen and (max-width: 360px)": {
                width: "10vw",
                height: "10vw",
            },
            "@media screen and (min-width: 360px) and (max-width: 960px)": {
                width: "10.5vw",
                height: "10.5vw",
            },
            "@media screen and (min-width: 960px)": {
                width: "5.3125vw",
                height: "5.3125vw",
            },
            maxWidth: "11vh",
            maxHeight: "11vh",
            minWidth: "unset",
            minHeight: "unset",
            display: 'flex',
            flexDirection: 'column',
        }),
    },
    { index: 1 }
);
