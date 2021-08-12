import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import { styles } from "./StyledTableCell.jss";

export const StyledTableCell = withStyles(styles)((props) => (
    <TableCell {...props}>{props.children}</TableCell>
));
