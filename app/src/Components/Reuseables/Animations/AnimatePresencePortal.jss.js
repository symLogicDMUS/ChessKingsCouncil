import {makeStyles} from "@material-ui/core/styles";
import {modal} from "../../helpers/modal.jss";

export const useStyles = makeStyles({
    modal: {
        ...modal,
        zIndex: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    }
}, {index: 1});