import {makeStyles} from "@material-ui/core/styles";
import {appBarHeight} from "../Drawers/ResponsiveDrawer.jss";

export const useStyles = makeStyles({
    board: props => ({
        marginTop: appBarHeight * 1.5,
        marginLeft: 'auto',
        marginRight: 'auto',
        '@media screen and (max-width: 360px)': {
            width: '80vw',
            height: '80vw',
        },
        '@media screen and (min-width: 360px) and (max-width: 960px)': {
            width: '84vw',
            height: '84vw',
        },
        maxWidth: '88vh',
        maxHeight: '88vh',
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 12.5%)',
        gridTemplateRows: 'repeat(8, 12.5%)',
    }),
}, {index: 1});
