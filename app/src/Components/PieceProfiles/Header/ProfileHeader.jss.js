import { themes } from "../../styles/themes.jss";
import { makeStyles } from "@material-ui/core/styles";
import {headerWidthLg, headerWidthMd, headerWidthSm, marginMd, marginMd2x, marginSm, marginSm2x}
    from "../constants.jss";

export const useStyles = makeStyles(
    {
        header: (props) => ({
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignItems: "center",
            justifyContent: "space-between",
            '@media screen and (max-width: 600px)': {
                width: headerWidthSm,
                marginLeft: marginSm2x,
                marginTop: marginSm,
                marginBottom: marginSm,
            },
            '@media screen and (min-width: 600px) and (max-width: 960px)': {
                width: headerWidthMd,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: marginMd,
                marginBottom: marginMd,
            },
            "@media screen and (min-width: 960px)": {
                width: headerWidthLg,
                marginTop: "2vh",
            },
        }),
        piece_name: (props) => ({
            "@media screen and (max-width: 600px)": {
                fontSize: "1.1rem",
                marginRight: '0.75rem',
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
        }),
    },
    { index: 1 }
);
