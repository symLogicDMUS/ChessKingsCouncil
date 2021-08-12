import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";

export const itemSizeSm = 150;
export const itemSizeLg = 175;

export const useStyles = makeStyles(
    {
        profile_wb_example: (props) => ({
            float: "left",
            display: "flex",
            marginRight: "1.5rem",
            flexDirection: "column",
        }),
        sqr_item_area: (props) => ({
            "@media screen and (max-width: 960px)": {
                width: itemSizeSm,
            },
            "@media screen and (min-width: 960px)": {
                width: itemSizeLg,
            },
        }),
        sqr_item: (props) => ({
            "@media screen and (max-width: 960px)": {
                width: itemSizeSm,
                height: itemSizeSm,
            },
            "@media screen and (min-width: 960px)": {
                width: itemSizeLg,
                height: itemSizeLg,
            },
            outline: `0.05rem solid ${themes[props.theme].outline}`,
        }),
        sqr_item_header: (props) => ({
            "@media screen and (max-width: 960px)": {
                width: itemSizeSm,
            },
            "@media screen and (min-width: 960px)": {
                width: itemSizeLg,
            },
            textAlign: "center",
        }),
        float: (props) => ({
            float: "left",
            marginRight: "1rem",
        }),
        item1: (props) => ({
            marginTop: "0.35rem",
            marginBottom: "0.5rem",
        }),
        item2: (props) => ({
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
        }),
        item3: (props) => ({
            marginTop: "0.4rem",
        }),
        img: (props) => ({
            width: "100%",
            height: "100%",
        }),
    },
    { index: 1 }
);
