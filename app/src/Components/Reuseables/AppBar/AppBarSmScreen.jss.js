import {makeStyles} from "@material-ui/core/styles";
import {miniVariantIconsColumnWidth} from "../Drawers/MiniVariantDrawer.jss";
import {leftDrawerWidth} from "../Drawers/ResponsiveDrawer.jss";

export const useStyles = makeStyles({

    /*without miniVariant icon column*/
    appBarRelaxed1: props => ({
        "& .MuiToolbar-gutters": {
            paddingLeft: 16,
            paddingRight:  16,
        },
    }),
    appBarCompressed1: props => ({
        "& .MuiToolbar-gutters": {
            paddingLeft: `calc(${leftDrawerWidth} + 28px)`,
            paddingRight: 16,
        }
    }),

    /*with miniVariant icon column*/
    appBarRelaxed2: props => ({
        "& .MuiToolbar-gutters": {
            paddingLeft: 16,
            paddingRight: miniVariantIconsColumnWidth + 16,
        },
    }),
    appBarCompressed2: props => ({
        "& .MuiToolbar-gutters": {
            paddingLeft: `calc(${leftDrawerWidth} + 28px)`,
            paddingRight: miniVariantIconsColumnWidth + 16,
        }
    }),
}, {index: 1});