import makeStyles from "@material-ui/core/styles/makeStyles";
import {imgFillDiv} from "../../Reuseables/imgFillDiv.jss";
import {modal} from "../../helpers/modal.jss";

export const useStyles = makeStyles({
    piece: {
        cursor: 'pointer',
        zIndex: 'inherit',
        ...imgFillDiv,
    },
});