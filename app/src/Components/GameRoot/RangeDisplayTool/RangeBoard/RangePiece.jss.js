import makeStyles from "@material-ui/core/styles/makeStyles";
import {imgFillDiv} from "../../../Reuseables/imgFillDiv.jss";

export const useStyles = makeStyles({
    piece: {
        position: 'absolute',
        zIndex: '1',
        ...imgFillDiv,
    },
});