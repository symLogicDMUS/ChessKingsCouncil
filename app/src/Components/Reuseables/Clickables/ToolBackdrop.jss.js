import { makeStyles } from "@material-ui/core/styles";
import {miniVariantIconsColumnWidth} from "../Drawers/MiniVariantDrawer.jss";
import {appBarHeight} from "../Drawers/ResponsiveDrawer.jss";

export const useStyles = makeStyles({
    backdrop: props => ({
        zIndex: 1,
        position: 'fixed',
        left: 0,
        top: appBarHeight,
        height: `calc(100vh - ${appBarHeight}px)`,
        width: `calc(100vw - ${miniVariantIconsColumnWidth}px)`,
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
    }),
}, {index: 1});