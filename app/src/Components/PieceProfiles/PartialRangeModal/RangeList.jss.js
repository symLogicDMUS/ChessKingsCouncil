import {fontSize00301} from "../../styles/fontSizes.jss";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    range_list_style: props => ({
        width: "100%",
        height: 8, //converted to em units in ScrollTable.jss
        fontSize: fontSize00301,
    }),
    button_style: props => ({
        borderRadius: 0,
    }),
    row_style: props => ({
        cursor: "pointer"
    }),
}, {index: 1});