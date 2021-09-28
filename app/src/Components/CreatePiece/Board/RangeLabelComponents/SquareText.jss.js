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
            "@media screen and (max-width: 960px)": {
                fontSize: "2.25vw",
            },
            "@media screen and (min-width: 960px)": {
                fontSize: "1.5vw",
            },
            margin: "auto",
            // textTransform: "none",
            // letterSpacing: "0.0075em",
            // lineHeight: 0.5,
            // fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
            width: "100%",
            // backgroundColor: 'none',
            // background: 'none',
            // display: 'flex',
            // flexDirection: 'column',
        }),
    },
    { index: 1 }
);
