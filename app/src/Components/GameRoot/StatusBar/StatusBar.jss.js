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
        '@media (min-aspect-ratio: 16/9)': {
            width: availWidth() * 0.98 - (sideBarWidth + drawerWidth),
            justifyContent: "space-between",
        },
        '@media (max-aspect-ratio: 1/1)': {
            width: availWidth() * 0.85,
            justifyContent: 'center',
        },
    }),
    page_name: props => ({
        '@media (min-aspect-ratio: 16/9)': {
            fontSize: fontSize002,
            width: '9.5em',
            marginLeft: '0.8em',
        },
        color: themes[props.theme].text,
    }),
    status_bar: props => ({
        zIndex: 4,
        '@media (min-aspect-ratio: 16/9)': {
            fontSize: fontSize002,
            width: '15em',
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: appBarHeight * 0.333,
            marginRight: '2em',
        },
        textAlign: 'center',
        color: themes[props.theme].text,
    }),
    flex_end: props => ({
        '@media (min-aspect-ratio: 16/9)': {
            width: '9.5em',
        },
    }),
})