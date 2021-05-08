import { makeStyles } from "@material-ui/core/styles";
import {leftDrawerWidth, rightDrawerWidth} from "../Drawers/ResponsiveDrawer.jss";

export const useStyles = makeStyles({
    appBarLg: props => ({
        "& .MuiToolbar-gutters": {
            paddingLeft: `calc(${leftDrawerWidth} + 16px)`,
            paddingRight: `calc(${rightDrawerWidth} + 16px)`,
        },
    }),
}, {index: 1});