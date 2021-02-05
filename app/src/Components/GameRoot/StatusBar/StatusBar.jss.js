import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes.jss";
import {fontSize002} from "../../styles/fontSizes.jss";
import {drawerWidth, sideBarWidth} from "../../Reuseables/PermanentDrawer.jss";
import {availWidth} from "../../helpers/windowMeasurments";

export const useStyles = makeStyles({
    /** either label label or grid is displayed, conditionally.*/
    header: props => ({
        width: availWidth()*0.98 - (sideBarWidth + drawerWidth),
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    }),
    page_name: props => ({
        fontSize: fontSize002,
        color: themes[props.theme].text,
        width: '9.5em',
        marginLeft: '0.8em',
    }),
    status_bar: props => ({
        zIndex: 4,
        fontSize: fontSize002,
        '@media screen and (min-width: 768px)': {
            width: '15em',
        },
        '@media screen and (max-width: 767px)': {
            width: '13em'
        },
        textAlign: 'center',
        color: themes[props.theme].text,
    }),
    flex_end: props => ({
        width: '9.5em',
    }),
})