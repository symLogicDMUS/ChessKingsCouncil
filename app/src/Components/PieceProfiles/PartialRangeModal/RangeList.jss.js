import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    range_list_style: props => ({
        width: "100%",
        height: 8,
        fontSize: '3.01vh',
    }),
    button_style: props => ({
        borderRadius: 0,
    }),
    row_style: props => ({
        cursor: "pointer"
    }),
}, {index: 1});