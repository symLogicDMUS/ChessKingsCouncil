import { lighten, makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";
import { miniVariantIconsColumnWidth } from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

export const useStyles = makeStyles(
    {
        modal: (props) => ({
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            position: "fixed",
            zIndex: 7,
            top: 0,
            left: 0,
            "@media screen and (max-width: 960px)": {
                width: `calc(100vw - ${miniVariantIconsColumnWidth}px)`,
            },
            "@media screen and (min-width: 960px)": {
                width: "100vw",
            },
        }),
        window: (props) => ({
            margin: "auto",
            borderRadius: "4.5vw",
            backgroundColor: themes[props.theme].fill,
            color: lighten(themes[props.theme].text, 0.25),
            border: `0.1rem solid ${themes[props.theme].odd_row}`,
            "@media screen and (min-width: 960px)": {
                height: "20vh",
                width: "35vw",
                "& .MuiChip-label": {
                    fontSize: "3vw",
                },
                "& .MuiAvatar-root": {
                    width: "3vw",
                    height: "3vw",
                },
                "& .MuiChip-deleteIcon": {
                    width: "2.5vw",
                    height: "2.5vw",
                    color: themes[props.theme].text_alt,
                },
            },
            "@media screen and (max-width: 960px)": {
                "& .MuiChip-label": {
                    fontSize: "1.15rem",
                },
            },
        }),
    },
    { index: 1 }
);
