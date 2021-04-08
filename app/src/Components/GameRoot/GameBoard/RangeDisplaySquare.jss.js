import { makeStyles } from "@material-ui/core/styles";
import {rfToGridLoc} from "../../helpers/crdCnvrt";

export const useStyles = makeStyles({
    square: props => ({
        ...rfToGridLoc(props.rf),
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        lineHeight: 0,
        border: 'none',
        outline: 'none',
    }),
}, {index: 1});