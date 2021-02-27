import {makeStyles} from "@material-ui/core/styles";
import {appBarHeight} from "../../Reuseables/PersistentDrawer.jss";
import {viewHeight, viewWidth} from "../../helpers/windowMeasurments";

export const root = (screenCase) => ({
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 8,
});

export const useStyles = makeStyles((theme) => ({
    root_active: {
        ...root(),
    },
    root_inactive: {
        ...root(),
        pointerEvents: 'none',
    },
    wrapper: {
        width: viewWidth()*0.45
    },
    paper: {
        position: "relative",
    },
    drawer:{
        width: '100%',
        height: (viewHeight() - appBarHeight)*0.98,
        backgroundColor: '#414141',
    },
}));