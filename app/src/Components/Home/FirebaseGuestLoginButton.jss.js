import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    anonymous_login_button: (props) => ({
        fontSize: props.fontSize,
        width: "10.4em",
        height: "1.45em",
        margin: "0.25em",
        display: "inline-block",
        lineHeight: "normal",
        padding: "8px 16px",
        textAlign: "left",
        direction: "ltr",
        cursor: "pointer",
        borderRadius: "0.148em",
        backgroundColor: "#f5b400",
        fontWeight: theme.typography.pxToRem(500),
        boxShadow: "0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)",
    }),
    anonymous_login_label: (props) => ({
        color: "#fff",
        display: "inline-block",
        fontSize: theme.typography.pxToRem(14),
        paddingLeft: theme.typography.pxToRem(13.6),
        padding: `${theme.typography.pxToRem(8)} ${theme.typography.pxToRem(16)}`,
        fontWeight: 500,
        lineHeight: "0.18em",
        textAlign: "left",
        direction: "ltr",
        textTransform: "none",
        verticalAlign: "middle",
        fontFamily: "Roboto,Helvetica,Arial,sans-serif",
    }),
    anonymous_icon: (props) => ({
        width: theme.typography.pxToRem(18),
        height: theme.typography.pxToRem(18),
        verticalAlign: "middle",
    }),
}));