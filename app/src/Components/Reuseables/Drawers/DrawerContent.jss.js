import { makeStyles } from "@material-ui/core/styles";
import {drawerWidth, sideBarWidth} from "./PermanentDrawer.jss";
import {fontSize002} from "../../styles/fontSizes.jss";
import {availHeight} from "../../helpers/windowMeasurments";

export const useStyles = makeStyles({
    drawer_content: props => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: fontSize002,
        width: `calc(100% - ${drawerWidth + sideBarWidth}px)`,
        marginLeft: sideBarWidth,
        marginTop: '3em',
        height: '93vh',
    }),
    toolbar: {
        fontSize: fontSize002,
        height: '3em',
    },
}, {index: 1});