import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    anonymous_login_button: (props) => ({
        fontSize: '2vh',
        width: theme.typography.pxToRem(170),
        height: theme.typography.pxToRem(24),
        margin: "0.25em",
        display: "inline-block",
        lineHeight: "cutouts",
        textAlign: "left",
        direction: "ltr",
        cursor: "pointer",
        borderRadius: "0.148em",
        backgroundColor: "#f5b400",
        fontWeight: theme.typography.pxToRem(500),
        padding: `${theme.typography.pxToRem(8)} ${theme.typography.pxToRem(16)}`,
        boxShadow: "0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)",
    }),
    anonymous_login_label: (props) => ({
        color: "#fff",
        display: "inline-block",
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: theme.typography.pxToRem(14),
        paddingLeft: theme.typography.pxToRem(13.6),
        padding: `${theme.typography.pxToRem(8)} ${theme.typography.pxToRem(16)}`,
        lineHeight: theme.typography.pxToRem(10),
        fontWeight: 500,
        textAlign: "left",
        direction: "ltr",
        textTransform: "none",
        verticalAlign: "middle",
        fontFamily: "Roboto,Helvetica,Arial,sans-serif",
        "@media (max-width:2559px) and (min-width:1920px)": {
            position: 'relative',
            top: '-0.1em'
        },
        "@media (max-width:3839px) and (min-width:2560px)": {
            position: 'relative',
            top: '-0.5em',
        },
        "@media (min-width:3840px)": {
            position: 'relative',
            top: '-1.275em',
        },
    }),
    anonymous_icon: (props) => ({
        fontSize: theme.typography.pxToRem(14),
        width: theme.typography.pxToRem(18),
        height: theme.typography.pxToRem(18),
        verticalAlign: "middle",
        "@media (max-width:2559px) and (min-width:1920px)": {
            position: 'relative',
            top: '-0.1em'
        },
        "@media (max-width:3839px) and (min-width:2560px)": {
            position: 'relative',
            top: '-0.5em',
        },
        "@media (min-width:3840px)": {
            position: 'relative',
            top: '-1.275em',
        },
    }),
}), {index: 1});