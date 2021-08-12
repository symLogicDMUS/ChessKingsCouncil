import { makeStyles } from "@material-ui/core/styles";
import { navDrawerSmWidth } from "./ResponsiveDrawer.jss";

const z = 5;

export const useStyles = makeStyles(
    {
        paper: (props) => ({
            zIndex: z,
            width: navDrawerSmWidth,
        }),
    },
    { index: 1 }
);
