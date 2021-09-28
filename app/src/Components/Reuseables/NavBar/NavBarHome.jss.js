import { makeStyles } from "@material-ui/core/styles";
import { topAreaHeight } from "../../Home/Main Menu/MainMenuLg.jss";

export const useStyles = makeStyles(
    {
        navBarAlt: (props) => ({
            display: "flex",
            width: "100vw",
            position: "fixed",
            top: topAreaHeight,
            left: 0,
        }),
    },
    { index: 1 }
);
