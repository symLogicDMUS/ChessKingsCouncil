import { themes } from "../../styles/themes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
    menuIconWidth,
    menuIconPadding,
    menuIconMarginRight,
    toolBarPadding,
} from "../../Reuseables/Drawers/ResponsiveDrawer.jss";
import { miniVariantIconsColumnWidth } from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

export const useStyles = makeStyles(
    {
        statusBar: (props) => ({
            zIndex: 7,
            fontSize: "1rem",
            textAlign: "center",
            color: themes[props.theme].text,
            "@media screen and (max-width: 960px)": {
                width: `calc(100% - ${
                    miniVariantIconsColumnWidth +
                    menuIconWidth +
                    menuIconMarginRight +
                    menuIconPadding +
                    toolBarPadding
                }px)`,
            },
            "@media screen and (min-width: 960px)": {
                width: "100%",
            },
        }),
    },
    { index: 1 }
);