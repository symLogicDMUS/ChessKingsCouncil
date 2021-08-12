import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";
import { marginLgHalf, sqrItemSizeLg, sqrItemSizeMd } from "../constants.jss";

export const useStyles = makeStyles(
    {
        header: (props) => ({
            "@media screen as (min-width: 600px) and (max-width: 960px)": {
                borderTop: `0.05em solid ${themes[props.theme].outline}`,
                borderBottom: `0.05em solid ${themes[props.theme].outline}`,
                justifyContent: "space-between",
            },
        }),
        options_box: (props) => ({
            display: "flex",
            flexDirection: "row",
            flexWrap: "no-wrap",
            alignItems: "baseline",
        }),
        header_box_lg_screen: (props) => ({
            width: sqrItemSizeLg,
        }),
        header_box_sm_screen: (props) => ({
            "@media screen and (max-width: 600px)": {
                flexGrow: 10,
            },
            "@media screen and (min-width: 600px) and (max-width: 960px)": {
                width: sqrItemSizeMd,
            },
        }),
        lg1: (props) => ({
            marginRight: marginLgHalf,
        }),
        lg2: (props) => ({
            marginLeft: marginLgHalf,
            marginRight: marginLgHalf,
        }),
        lg3: (props) => ({
            marginLeft: marginLgHalf,
        }),
        promo_checkbox: (props) => ({
            "& .MuiCheckbox-root": {
                "@media screen and (max-width: 600px)": {
                    width: "2rem",
                    height: "2rem",
                },
                "@media screen as (min-width: 600px) and (max-width: 960px)": {
                    width: "5vw",
                    height: "5vw",
                },
                "@media screen and (min-width: 960px)": {
                    width: "3vw",
                    height: "3vw",
                },
            },
            "& .MuiSvgIcon-root": {
                "@media screen and (max-width: 600px)": {
                    height: "1.3rem",
                    width: "1.3rem",
                },
                "@media screen and (min-width: 600px) and (max-width: 960px)": {
                    height: "3.5vw",
                    width: "3.5vw",
                },
                "@media screen and (min-width: 960px)": {
                    height: "1.75vw",
                    width: "1.75vw",
                },
            },
            "& .MuiTypography-root": {
                "@media screen and (max-width: 600px)": {
                    fontSize: "1.1rem",
                },
                "@media screen and (min-width: 600px) and (max-width: 960px)": {
                    fontSize: "3vw",
                    lineHeight: "2.75rem",
                },
                "@media screen and (min-width: 960px)": {
                    fontSize: "1.5vw",
                    lineHeight: "2.75rem",
                },
                color: themes[props.theme].text,
                fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
            },
            marginLeft: "unset",
        }),
        justify_between: (props) => ({
            justifyContent: "space-between",
        }),
        justify_start: (props) => ({
            justifyContent: "flex-start",
        }),
        justify_end: (props) => ({
            justifyContent: "flex-end",
        }),
        align_center: (props) => ({
            alignItems: "center",
        }),
    },
    { index: 1 }
);
