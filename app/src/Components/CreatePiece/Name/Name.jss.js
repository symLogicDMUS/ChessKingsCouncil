import makeStyles from "@material-ui/core/styles/makeStyles";
import {toolLeft, toolWidth} from "../CreatePiece.jss";
import {availHeight, availWidth} from "../../helpers/windowMeasurments";
import {drawerWidth} from "../../Reuseables/PermanentDrawerLeft.jss";

export const text_field = (fontSize) => ({
        // position: "absolute",
        fontSize: fontSize,
        top: '1em',
        left: '1em',
})

export const useStyles = makeStyles({
    name: {
        // position: 'absolute',
        zIndex: 0,
        width: drawerWidth,
        // left: toolLeft(),
        height: availHeight() * 0.08,
        // top: availHeight() * 0.1976,
        backgroundColor: 'red',
    },
});
