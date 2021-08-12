import { makeStyles } from "@material-ui/core/styles";
import { miniVariantIconsColumnWidth } from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

export const windowHeight = 142;

export const useStyles = makeStyles(
    {
        window: (props) => ({
            width: `calc(100vw - ${miniVariantIconsColumnWidth}px)`,
            padding: 20,
        }),
    },
    { index: 1 }
);
