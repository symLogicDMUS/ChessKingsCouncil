import { makeStyles } from "@material-ui/core/styles";
import {imgFillDiv} from "../../Reuseables/imgFillDiv.jss";

export const useStyles = makeStyles({
    piece: props => ({
       ...imgFillDiv,
    }),
});