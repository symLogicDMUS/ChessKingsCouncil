import { makeStyles } from "@material-ui/core/styles";
import {miniVariantIconsColumnWidth} from "../Drawers/MiniVariantDrawer.jss";

export const useStyles = makeStyles({
    appBarCompressed: props => ({
        width: `calc(82vw - ${miniVariantIconsColumnWidth}px)`,
        marginRight: miniVariantIconsColumnWidth,
    }),
    appBarRelaxed: props => ({
        width: '100vw',
    }),
}, {index: 1});