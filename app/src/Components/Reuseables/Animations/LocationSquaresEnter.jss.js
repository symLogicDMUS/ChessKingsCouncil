import { makeStyles } from "@material-ui/core/styles";
import { appBarHeight } from "../Drawers/ResponsiveDrawer.jss";
import { miniVariantIconsColumnWidth } from "../Drawers/MiniVariantDrawer.jss";

export const useStyles = makeStyles(
    {
        board: (props) => ({
            marginTop: appBarHeight * 1.5,
            marginLeft: "auto",
            marginRight: "auto",
            "@media screen and (max-width: 360px)": {
                width: "80vw",
                height: "80vw",
            },
            "@media screen and (min-width: 360px) and (max-width: 960px)": {
                width: "84vw",
                height: "84vw",
            },
            maxWidth: "88vh",
            maxHeight: "88vh",
            display: "grid",
            gridTemplateColumns: "repeat(8, 12.5%)",
            gridTemplateRows: "repeat(8, 12.5%)",
        }),
        backdrop: (props) => ({
            zIndex: 1,
            position: "fixed",
            left: 0,
            top: 0,
            height: "100vh",
            width: `calc(100vw - ${miniVariantIconsColumnWidth}px)`,
        }),
    },
    { index: 1 }
);
