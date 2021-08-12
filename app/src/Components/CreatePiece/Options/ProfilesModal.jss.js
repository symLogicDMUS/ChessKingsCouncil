import { makeStyles } from "@material-ui/core/styles";
import {
    pieceProfilesLgHeight,
    pieceProfilesLgWidth,
} from "../../PieceProfiles/PieceProfiles.jss";
import { appBarHeight } from "../../Reuseables/Drawers/ResponsiveDrawer.jss";

export const useStyles = makeStyles(
    {
        backdrop: (props) => ({
            zIndex: 6,
        }),
        profiles_dialog: (props) => ({
            zIndex: 7,
            position: "absolute",
            "@media screen and (max-width: 960px)": {
                left: 0,
                top: appBarHeight,
            },
            "@media screen and (min-width: 960px)": {
                "--heightA": "calc(100vh * 0.49)",
                "--widthA": "calc(100vw * 0.5)",
                "--heightB": `calc(${pieceProfilesLgHeight} * 0.49)`,
                "--widthB": `calc(${pieceProfilesLgWidth} * 0.5)`,
                "--top": "calc(var(--heightA) - var(--heightB))",
                "--left": "calc(var(--widthA) - var(--widthB))",
                left: "var(--left)",
                top: "var(--top)",
            },
        }),
        close: (props) => ({
            position: "absolute",
            right: 0,
            top: 0,
            padding: "0.1rem",
            "& .MuiSvgIcon-root": {
                width: "1rem",
                height: "1rem",
            },
        }),
    },
    { index: 1 }
);
