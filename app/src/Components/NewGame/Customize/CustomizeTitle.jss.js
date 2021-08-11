import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";
import { pieceProfilesLgWidth } from "../../PieceProfiles/PieceProfiles.jss";
import { rightDrawerWidth } from "../../Reuseables/Drawers/PermanentDrawerRight.jss";
import {
    marginLg2x,
    sqrItemSizeLg,
    sqrItemSizeMd,
} from "../../PieceProfiles/constants.jss";
import { miniVariantIconsColumnWidth } from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

export const originTransform = { vertical: "top", horizontal: "right" };

export const useStyles = makeStyles(
    {
        title: (props) => ({
            marginRight: "auto",
        }),
        promo_all: (props) => ({
            margin: 0,
            "& .MuiSvgIcon-root": {
                fontSize: "1.1rem",
            },
            "& .MuiTypography-root": {
                letterSpacing: "0.0075em",
                fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
                fontSize: "1rem",
            },
        }),
        search: (props) => ({
            margin: "unset",
            height: "1.65rem",
            "@media screen and (max-width: 960px)": {
                flexGrow: 2,
            },
            "@media screen and (min-width: 960px)": {
                width: sqrItemSizeLg,
            },
        }),
        sign_out_button: (props) => ({
            position: "fixed",
            "@media screen and (max-width: 960px)": {
                right: miniVariantIconsColumnWidth,
            },
            "@media screen and (min-width: 960px)": {
                right: `calc(${rightDrawerWidth} + 0.5rem)`,
            },
        }),
        content: (props) => ({
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignItems: "center",

            "& .MuiSvgIcon-root": {
                color: themes[props.theme].text,
            },
            "@media screen and (max-width: 960px)": {
                width: "100%",
                marginRight: 32,
            },
            "@media screen and (min-width: 960px)": {
                width: pieceProfilesLgWidth,
                padding: `0 ${marginLg2x}`,
                marginRight: "auto",
                marginLeft: "auto",
            },
        }),
        actions: (props) => ({
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignItems: "center",
            justifyContent: "space-between",
            "@media screen and (max-width: 960px)": {
                width: sqrItemSizeMd,
            },
            "@media screen and (min-width: 960px)": {
                width: `calc(${sqrItemSizeLg} + ${marginLg2x} + ${sqrItemSizeLg})`,
            },
        }),
        text: (props) => ({
            color: themes[props.theme].text,
        }),
    },
    { index: 1 }
);
