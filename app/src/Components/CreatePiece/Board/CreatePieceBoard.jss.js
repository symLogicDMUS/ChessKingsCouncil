import makeStyles from "@material-ui/core/styles/makeStyles";
import {appBarHeight} from "../../Reuseables/Drawers/PersistentDrawer.jss";

export const sqrSize = {
    wide: '5.3125vw',
    thin: '10.5vw',
};

export const smLeft = '4vw';
export const lgLeft = '25.25vw';
export const smTop = appBarHeight*1.1;
export const lgTop = 56;

export const useStyles = makeStyles({
    board: props => ({
        display: 'grid',
        position: 'absolute',
        '@media screen and (max-width: 960px)': {
            left: smLeft,
            top: smTop,
        },
        '@media screen and (min-width: 960px)': {
            boxShadow: '0 0 0.1em white',
            left: lgLeft,
            top: lgTop,
        },
    }),
}, {index: 1});
