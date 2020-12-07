import makeStyles from "@material-ui/core/styles/makeStyles";
import {col as navBarCol} from "./NavBar.jss";

const columnSize = (scaler) => navBarCol(0.12) * scaler;

export const useStyles = makeStyles({
    nav_bar_button: props => ({
        gridColumn: props.column,
        display: 'grid',
        gridTemplateColumns: `${columnSize(0.25)}px, ${columnSize(0.75)}px`,
        background: props.theme.button_fill
    }),
    text_button: props => ({
        gridRow: 1,
        gridColumn: 2,
        color: props.theme.button_text,
    }),
    icon_button: props => ({
        gridRow: 1,
        gridColumn: 1,
        color: props.theme.button_text,
    }),
});
