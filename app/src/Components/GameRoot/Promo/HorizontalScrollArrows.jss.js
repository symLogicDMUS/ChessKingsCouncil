import {makeStyles} from "@material-ui/core/styles"
import {getFontSize} from "./Promo.jss";

const getArrowButtonHeight = () => getFontSize() * 8;

const button = {
    height: getArrowButtonHeight(),
    width: "0.5em",
    fontSize: getFontSize(),
    lineHeight: 0,
    minWidth: 0,
}

export const useStyles = makeStyles((theme) => ({
    forward_button: {
        ...button
    },
    backward_button: {
        ...button,
    }
}));
