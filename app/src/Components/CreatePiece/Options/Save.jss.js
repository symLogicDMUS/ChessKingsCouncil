/** See Option.jss.js */
import { makeStyles } from "@material-ui/core/styles";
import {modal} from "../../helpers/modal.jss";

export const useStyles = makeStyles({
    modal: props => ({
       ...modal,
    }),
});