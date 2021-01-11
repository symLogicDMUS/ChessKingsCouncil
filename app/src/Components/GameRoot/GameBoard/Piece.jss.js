import { makeStyles } from "@material-ui/core/styles";
import {sqrSize} from "../../Reuseables/Board.jss";

export const useStyles = makeStyles({
    piece: props => ({
        cursor: 'grab',
        width: sqrSize * 0.95,
        height: sqrSize * 0.95,
        textAlign: 'center',
        verticalAlign: 'center'
    }),
});