import {makeStyles} from "@material-ui/core/styles"
import {availWidth} from "../../helpers/windowMeasurments";
import {drawerWidth, sideBarWidth} from "../PermanentDrawer.jss";

export const navBarWidth = sideBarWidth * 0.98;

export const useStyles = makeStyles((theme) => ({
    nav_bar: props => ({
        ...props.style,
        fontSize: props.fontSize,
        display: 'flex',
        flexDirection: props.flexDirection,
        flexWrap: 'nowrap',
    }),
    delete_me: props => ({
        left: sideBarWidth,
        width: availWidth() - (sideBarWidth + drawerWidth)
    }),
}));


