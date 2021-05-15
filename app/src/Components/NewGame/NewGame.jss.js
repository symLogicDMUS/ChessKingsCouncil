import {makeStyles} from "@material-ui/core/styles"
import {appBarHeight} from "../Reuseables/Drawers/ResponsiveDrawer.jss";
import {viewHeight} from "../helpers/windowMeasurments";

export const useStyles = makeStyles({
    new_game: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        '@media screen and (max-width: 960px)': {
            height: viewHeight() - appBarHeight,
        },
        '@media screen and (min-width: 960px)': {
            height: '95vh',
        },
    }),
    item: props => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }),
    title: props => ({
        width: '100%',
        marginBottom: '2vh',
    }),
}, {index: 1});
