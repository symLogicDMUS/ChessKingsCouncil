import { themes } from "../../styles/themes/themes.jss";
import { makeStyles } from "@material-ui/core/styles";
import {
    headerWidthLg,
    headerWidthMd,
    headerWidthSm,
    marginMd,
    marginMd2x,
    headerMarginSm,
    marginSm2x,
    headerMarginMd,
} from "../constants.jss";

export const useStyles = makeStyles(
    {
        header: (props) => ({
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignItems: "center",
            justifyContent: "space-between",
            "@media screen and (max-width: 600px)": {
                width: headerWidthSm,
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: headerMarginSm,
                marginBottom: headerMarginSm,
            },
            "@media screen and (min-width: 600px) and (max-width: 960px)": {
                width: headerWidthMd,
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: marginMd,
                marginBottom: headerMarginMd,
            },
            "@media screen and (min-width: 960px)": {
                width: headerWidthLg,
                marginTop: "2vh",
                marginBottom: "0.5vh",
            },
        }),
    },
    { index: 1 }
);
