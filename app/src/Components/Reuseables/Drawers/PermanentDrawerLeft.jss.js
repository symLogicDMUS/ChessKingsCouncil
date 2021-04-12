import { makeStyles } from "@material-ui/core/styles";
import {leftDrawerWidth} from "./ResponsiveDrawer.jss";

const z = 5;
export const useStyles = makeStyles({
    paper: props => ({
        zIndex: z,
        width: leftDrawerWidth,
        '@media screen and (max-width: 960px)': {
            width: 0,
        },
    }),
}, {index: 1});