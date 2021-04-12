import {makeStyles} from "@material-ui/core/styles";
import {appBarHeight} from "../Drawers/ResponsiveDrawer.jss";

export const locSqrEnter = {zIndex: 1};

export const useStyles = makeStyles({
    board: props => ({
        zIndex: 1,
        marginTop: appBarHeight*1.5,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '84vw',
        height: '84vw',
        maxWidth: '88vh',
        maxHeight: '88vh',
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 12.5%)',
        gridTemplateRows: 'repeat(8, 12.5%)',
    }),
}, {index: 1});
