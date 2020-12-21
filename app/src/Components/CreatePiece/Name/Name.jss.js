import makeStyles from "@material-ui/core/styles/makeStyles";
import {toolbox} from "../CreatePiece.jss";
import {availHeight} from "../../helpers/windowMeasurments";

export const useStyles = makeStyles({
    name: {
        width: '100%',
        height: availHeight() * 0.08,
        backgroundColor: '#414141',
    },
    box: props => ({
        ...toolbox,
    }),
});
