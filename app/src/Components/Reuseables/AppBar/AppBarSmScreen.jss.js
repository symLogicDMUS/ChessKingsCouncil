import { makeStyles } from "@material-ui/core/styles";
import { miniVariantIconsColumnWidth } from "../Drawers/MiniVariantDrawer.jss";
import { leftDrawerWidth } from "../Drawers/PermanentDrawerLeft.jss";

export const useStyles = makeStyles(
    {
        /*without miniVariant icon column*/
        appBarRelaxed1: (props) => ({
            "& .MuiToolbar-gutters": {
                paddingLeft: 16,
                paddingRight: 16,
            },
        }),
        appBarCompressed1: (props) => ({
            "& .MuiToolbar-gutters": {
                paddingLeft: `calc(${leftDrawerWidth} + 28px)`,
                paddingRight: 16,
            },
        }),

        /*with miniVariant icon column*/
        appBarRelaxed2: (props) => ({
            "& .MuiToolbar-gutters": {
                paddingLeft: 16,
                "@media screen and (max-width: 426px)": {
                    paddingRight: miniVariantIconsColumnWidth + 4,
                },
                "@media screen and (min-width: 426px)": {
                    paddingRight: miniVariantIconsColumnWidth + 16,
                },
            },
        }),
        appBarCompressed2: (props) => ({
            "& .MuiToolbar-gutters": {
                paddingLeft: `calc(${leftDrawerWidth} + 28px)`,
                "@media screen and (max-width: 426px)": {
                    paddingRight: miniVariantIconsColumnWidth + 4,
                },
                "@media screen and (min-width: 426px)": {
                    paddingRight: miniVariantIconsColumnWidth + 16,
                },
            },
        }),
    },
    { index: 1 }
);
