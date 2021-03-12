import { makeStyles } from "@material-ui/core/styles";
import {imgFillDiv} from "../../styles/imgFillDiv.jss";

export const useStyles = makeStyles({
    piece: props => ({
       ...imgFillDiv,
    }),
}, {index: 1});