import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
    (theme) => ({
        button: (props) => ({
            width: 220,
            height: 40,
            "& .MuiTypography-root": {
                fontSize: theme.typography.pxToRem(14),
                paddingTop: `${theme.typography.pxToRem(8)}`,
                paddingBottom: `${theme.typography.pxToRem(8)}`,
                lineHeight: theme.typography.pxToRem(10),
                fontWeight: 500,
                textAlign: "left",
                direction: "ltr",
                textTransform: "none",
                verticalAlign: "middle",
                fontFamily: "Roboto,Helvetica,Arial,sans-serif",
            },
            "@media screen and (max-width: 600px)": {
                margin: 8,
            },
        }),
        text: (props) => ({
            display: "inline-block",
            marginLeft: "auto",
            marginRight: "auto",
            "@media (max-width:2559px) and (min-width:1920px)": {
                position: "relative",
                top: "-0.1em",
            },
            "@media (max-width:3839px) and (min-width:2560px)": {
                position: "relative",
                top: "-0.5em",
            },
            "@media (min-width:3840px)": {
                position: "relative",
                top: "-1.275em",
            },
        }),
        icon: (props) => ({
            fontSize: 14,
            width: 18,
            height: 18,
            verticalAlign: "middle",
            "@media (max-width:2559px) and (min-width:1920px)": {
                position: "relative",
                top: "-0.1em",
            },
            "@media (max-width:3839px) and (min-width:2560px)": {
                position: "relative",
                top: "-0.5em",
            },
            "@media (min-width:3840px)": {
                position: "relative",
                top: "-1.275em",
            },
        }),
        color1: (props) => ({
            "& .MuiTypography-root": {
                color: "#ffb400",
            },
            borderColor: "#ffb400",
            "&:hover": {
                backgroundColor: "rgba(235, 180, 0, 0.08)",
            },
        }),
        color2: (props) => ({
            color: "#fff",
            backgroundColor: "#3f51b5",
            "&:hover": {
                backgroundColor: "#3f51b5",
            },
        }),
    }),
    { index: 1 }
);
