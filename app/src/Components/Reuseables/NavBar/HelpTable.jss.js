import makeStyles from "@material-ui/core/styles/makeStyles";
import {modal} from "../../helpers/modal.jss";

export const useStyles = makeStyles({
    modal: props => ({
        ...modal,
        zIndex: 10,
    }),
})
