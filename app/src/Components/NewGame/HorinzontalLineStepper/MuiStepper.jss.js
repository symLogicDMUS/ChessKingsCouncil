import { makeStyles } from "@material-ui/core/styles";
import {appBarHeight} from "../../Reuseables/Drawers/ResponsiveDrawer.jss";

export const useStyles = makeStyles({
    stepper: (props) => ({
        zIndex: 1,
        position: "fixed",
        top: appBarHeight,
        width: "100vw",
        backgroundColor: "#fff00",
    }),
    hidden: {
        display: 'none',
    },
}, {index: 1});