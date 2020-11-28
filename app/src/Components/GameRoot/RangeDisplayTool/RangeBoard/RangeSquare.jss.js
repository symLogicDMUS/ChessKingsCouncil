import { makeStyles } from "@material-ui/core/styles";
import { dark_normal, light_normal, dark_in_range, light_in_range, none } from "../../../Reuseables/squareMixin.jss";

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
