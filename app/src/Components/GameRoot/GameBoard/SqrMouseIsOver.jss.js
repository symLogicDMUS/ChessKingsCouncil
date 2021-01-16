import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    square: props => ({
        position: 'absolute',
        width: props.sqrSize,
        height: props.sqrSize,
        zIndex: 3,
    }),
});