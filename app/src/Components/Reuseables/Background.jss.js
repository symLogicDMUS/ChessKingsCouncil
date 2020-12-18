import { makeStyles } from "@material-ui/core/styles";
import {availHeight, availWidth} from "../helpers/windowMeasurments";

export const useStyles = makeStyles({
    background: props => ({
        position: 'absolute',
        zIndex: -1,
        left: 0,
        top: 0,
        width: availWidth(),
        height: availHeight(),
    }),
});