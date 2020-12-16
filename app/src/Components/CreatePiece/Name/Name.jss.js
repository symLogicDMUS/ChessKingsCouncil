import makeStyles from "@material-ui/core/styles/makeStyles";
import {toolbox, toolLeft, toolWidth} from "../CreatePiece.jss";
import {availHeight, availWidth} from "../../helpers/windowMeasurments";
import {drawerWidth} from "../../Reuseables/PermanentDrawer.jss";

export const useStyles = makeStyles({
    name: {
        width: drawerWidth,
        height: availHeight() * 0.08,
        backgroundColor: '#414141',
    },
    box: props => ({
        ...toolbox,
    }),
});
