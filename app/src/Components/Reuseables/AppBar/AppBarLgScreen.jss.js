import { makeStyles } from "@material-ui/core/styles";
import {rightDrawerWidth} from "../Drawers/ResponsiveDrawer.jss";

export const useStyles = makeStyles({
    appBarLg: props => ({
        width: '57vw',
        marginRight: rightDrawerWidth,
    }),
}, {index: 1});