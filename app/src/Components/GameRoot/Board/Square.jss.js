import makeStyles from "@material-ui/core/styles/makeStyles";
import {dark_in_range, light_in_range, none} from "../../Reuseables/BoardMixins.jss";

export const useStyles = makeStyles({
    dark_in_range: (props) => ({
        ...dark_in_range(props.rf),
    }),
    light_in_range: (props) => ({
        ...light_in_range(props.rf),
    }),
    none: (props) => ({
        ...none(props.rf),
    }),
});
