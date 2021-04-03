import makeStyles from "@material-ui/core/styles/makeStyles";
import {appBarHeight} from "../../Reuseables/Drawers/PersistentDrawer.jss";

export const sqrSize = {
    wide: '5.3125vw',
    thin: '10.5vw',
};

export const useStyles = makeStyles({
    board: props => ({
        display: 'grid',
        '@media screen and (max-width: 960px)': {
            position: 'fixed',
            left: '4vw',
            top: appBarHeight*1.1,
        },
        '@media screen and (min-width: 960px)': {
            boxShadow: '0 0 0.1em white',
            position: 'absolute',
            left: '25.25vw',
            top: 56,
        },
    }),
}, {index: 1});
