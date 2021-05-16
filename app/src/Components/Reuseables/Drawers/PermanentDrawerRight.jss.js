import {makeStyles} from "@material-ui/core/styles";
import {z} from "./ResponsiveDrawer.jss";

export const rightDrawerWidth = '25vw';
export const rightDrawerPadding = '1.15vw';
export const rightDrawerPadding2x = '2.3vw';

export const useStyles = makeStyles({
    paper: props => ({
        zIndex: z,
        width: rightDrawerWidth,
    }),
    content: props => ({
        zIndex: z,
        flexGrow: 1,
        display: 'flex',
        paddingLeft: rightDrawerPadding,
        paddingRight: rightDrawerPadding,
        flexDirection: 'column',
        alignItems: 'center',
    }),
}, {index: 1});