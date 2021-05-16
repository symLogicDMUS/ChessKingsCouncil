import { makeStyles } from "@material-ui/core/styles";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

export const textAlign = "left";
export const useStyles = makeStyles({
    window: props => ({
        width: `calc(100vw - ${miniVariantIconsColumnWidth}px)`,
        padding: 0,
    }),
    table: props => ({
        minWidth: 220,
    }),
}, {index: 1});