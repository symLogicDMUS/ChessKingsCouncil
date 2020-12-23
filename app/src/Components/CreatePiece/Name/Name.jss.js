import makeStyles from "@material-ui/core/styles/makeStyles";
import {tool_flexbox} from "../CreatePiece.jss";
import {availHeight} from "../../helpers/windowMeasurments";

export const useStyles = makeStyles({
    name: {
        width: '100%',
        height: availHeight() * 0.08,
        backgroundColor: '#414141',
    },
    box: props => ({
        ...tool_flexbox,
    }),
});
