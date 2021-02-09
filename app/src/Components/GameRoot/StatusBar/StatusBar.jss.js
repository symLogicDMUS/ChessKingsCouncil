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
        '@media screen and (min-width: 768px)': {
            width: availWidth() * 0.98 - (sideBarWidth + drawerWidth),
            justifyContent: "space-between",
        },
        '@media screen and (max-width: 767px)': {
            width: availWidth() * 0.85,
            justifyContent: 'center',
        },
    }),
    page_name: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSize002,
            width: '9.5em',
            marginLeft: '0.8em',
        },
        color: themes[props.theme].text,
    }),
    status_bar: props => ({
        zIndex: 4,
        '@media screen and (min-width: 768px)': {
            fontSize: fontSize002,
            width: '15em',
        },
        '@media screen and (max-width: 767px)': {
            fontSize: appBarHeight * 0.333,
            marginRight: '2em',
        },
        textAlign: 'center',
        color: themes[props.theme].text,
    }),
    flex_end: props => ({
        '@media screen and (min-width: 768px)': {
            width: '9.5em',
        },
    }),
})