import {makeStyles} from "@material-ui/core/styles"
import {appBarHeight} from "../Reuseables/Drawers/PersistentDrawer.jss";
import {viewHeight, viewWidth} from "../helpers/windowMeasurments";
import {fontSize012, fontSize0018, fontSizeW015,} from "../styles/fontSizes.jss";
import {themes} from "../styles/themes.jss";

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
