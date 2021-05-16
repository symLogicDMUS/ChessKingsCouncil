import {withStyles} from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import { styles } from "./StyledTableRow.jss";

export const StyledTableRow = withStyles(styles)((props) => (
    <TableRow {...props}>
        {props.children}
    </TableRow>
));