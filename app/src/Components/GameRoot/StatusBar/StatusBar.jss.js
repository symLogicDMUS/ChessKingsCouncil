import {drawerWidth, sideBarWidth} from "../../Reuseables/PermanentDrawer.jss";
import {appBarHeight} from "../../Reuseables/PersistentDrawer.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {availWidth} from "../../helpers/windowMeasurments";
import {fontSize002} from "../../styles/fontSizes.jss";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    /** either label label or grid is displayed, conditionally.*/
    header: props => ({
        display: "flex",
        flexDirection: "row",
        '@media (min-aspect-ratio: 1001/1000)': {
            width: availWidth() * 0.98 - (sideBarWidth + drawerWidth),
            justifyContent: "flex-start",
        },
        '@media (max-aspect-ratio: 1/1)': {
            width: availWidth() * 0.85,
            justifyContent: 'center',
        },
    }),
    // desktop only
    page_name: props => ({
        fontSize: fontSize002,
        marginLeft: '0.8em',
        color: themes[props.theme].text,
    }),
    status_bar: props => ({
        zIndex: 4,
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSize002,
            flexGrow: 100,
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: appBarHeight * 0.333,
            marginRight: '2em',
        },
        display: 'flex',
        justifyContent: 'center',
        color: themes[props.theme].text,
    }),
    alignment_adjuster: props => ({
        display: 'inline-block',
        opacity: 0
    }),
})