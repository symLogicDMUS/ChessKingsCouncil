import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";
import { appBarHeight } from "../../Reuseables/Drawers/ResponsiveDrawer.jss";
import { fade } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    stepper: (props) => ({
        zIndex: 1,
        position: "fixed",
        top: appBarHeight,
        width: "100vw",
        backgroundColor: "#fff00",
    }),
    actions: (props) => ({
        zIndex: 1,
        position: "fixed",
        bottom: '1rem',
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }),
    instructions: (props) => ({
        zIndex: 1,
        fontWeight: 700,
        marginBottom: theme.spacing(2),
        color: themes[props.theme].title,
        backdropFilter: 'blur(1px)',
        padding: '0px 0.5rem',
        borderRadius: 4,
    }),
    hidden: {
        display: 'none',
    }
}));
