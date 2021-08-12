import { themes } from "../../styles/themes/themes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { appBarHeight } from "../../Reuseables/Drawers/ResponsiveDrawer.jss";
import { miniVariantIconsColumnWidth } from "../../Reuseables/Drawers/MiniVariantDrawer.jss";
import { leftDrawerWidth } from "../../Reuseables/Drawers/PermanentDrawerLeft.jss";

export const marginLeft = {
    marginLeft: "auto",
};

export const useStyles = makeStyles(
    {
        statusBar: (props) => ({
            zIndex: 7,
            width: "100%",
            fontSize: "1rem",
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignItems: "center",
            justifyContent: "center",
            color: themes[props.theme].text,
        }),
        status: (props) => ({
            position: "fixed",
            top: 0,
            height: appBarHeight,
            display: "flex",
            flexDirection: "column",
            "@media screen and (max-width: 960px)": {
                left: 0,
                width: `calc(100vw - ${miniVariantIconsColumnWidth}px)`,
            },
            "@media screen and (min-width: 960px)": {
                left: leftDrawerWidth,
                width: "57vw",
            },
        }),
        text: (props) => ({
            fontSize: "1rem",
            textAlign: "center",
            color: themes[props.theme].text,
            margin: "auto",
        }),
        icon: (props) => ({
            width: 15,
            height: 15,
            color: themes[props.theme].text,
        }),
    },
    { index: 1 }
);
