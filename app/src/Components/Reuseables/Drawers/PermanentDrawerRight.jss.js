import { makeStyles } from "@material-ui/core/styles";
import {rightDrawerWidth} from "./ResponsiveDrawer.jss";

const z = 5;

export const useStyles = makeStyles({
    paper: props => ({
        zIndex: z,
        width: rightDrawerWidth,
    }),
    content: props => ({
        zIndex: z,
        flexGrow: 1,
        display: 'flex',
        paddingLeft: '1.15vw',
        paddingRight: '1.15vw',
        flexDirection: 'column',
    }),
}, {index: 1});