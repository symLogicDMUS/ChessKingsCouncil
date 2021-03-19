import {themes} from "../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {viewHeight} from "../helpers/windowMeasurments";
import {appBarHeight} from "../Reuseables/Drawers/PersistentDrawer.jss";

export const useStyles = makeStyles({
    page_link: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'baseline',
        justifyContent: 'flex-start',
    }),
    page_icon: props => ({
        width: '0.8em',
        height: '0.8em',
        marginRight: '0.5em',
    }),
    height_and_font_size: props => ({
        height: (viewHeight() - (appBarHeight + viewHeight() * 0.075))*0.45*0.1,
        fontSize: (viewHeight() - (appBarHeight + viewHeight() * 0.075))*0.45*0.1,
    }),
}, {index: 1});