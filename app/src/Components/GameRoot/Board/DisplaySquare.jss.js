import {makeStyles} from "@material-ui/core/styles"
import {dark_normal, light_normal} from "../../Reuseables/squareMixin.jss";

export const useStyles = makeStyles({
    dark_normal: (props) => ({
        ...dark_normal(props.rf),
    }),
    light_normal: (props) => ({
        ...light_normal(props.rf),
    }),
});
