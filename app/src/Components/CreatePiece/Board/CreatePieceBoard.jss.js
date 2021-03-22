import makeStyles from "@material-ui/core/styles/makeStyles";
import {appBarHeight} from "../../Reuseables/Drawers/PersistentDrawer.jss";
import {viewHeight} from "../../helpers/windowMeasurments";

export const sqrSize = {
    desktop: '11vh',
    mobile: '11.5vw',
};

export const useStyles = makeStyles({
    board: props => ({
        display: 'grid',
        '@media screen and (max-width: 1040px)': {
            position: 'fixed',
            left: '4vw',
            top: appBarHeight + viewHeight()*0.01,
        },
        '@media screen and (min-width: 1040px)': {
            boxShadow: '0 0 0.1em white',
            margin: 'auto',
        },
    }),
}, {index: 1});
