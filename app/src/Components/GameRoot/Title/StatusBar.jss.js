import {drawerWidth, sideBarWidth} from "../../Reuseables/Drawers/PermanentDrawer.jss";
import {appBarHeight} from "../../Reuseables/Drawers/PersistentDrawer.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {availWidth} from "../../helpers/windowMeasurments";
import {fontSize002} from "../../styles/fontSizes.jss";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    status_bar: props => ({
        zIndex: 7,
        fontSize: '1rem',
        textAlign: 'center',
        color: themes[props.theme].text,
        '@media screen and (max-width: 960px)': {
            transform: 'translate(-26px, 0)',
        },
    }),
}, {index: 1})