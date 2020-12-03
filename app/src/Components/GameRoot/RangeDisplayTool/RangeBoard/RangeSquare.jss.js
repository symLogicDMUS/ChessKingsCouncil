import { makeStyles } from "@material-ui/core/styles";
import {dark_in_range, dark_normal, light_in_range, light_normal, none} from "../../../Reuseables/BoardMixins.jss";

export const useStyles = makeStyles({
    dark_normal: (props) => ({
        ...dark_normal(props.rf),
    }),
    light_normal: (props) => ({
        ...light_normal(props.rf),
    }),
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
