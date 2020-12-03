import {makeStyles} from "@material-ui/core/styles"
import {getTextWidth} from "../helpers/getTextWidth";
import {modal} from "../helpers/modal.jss";

export const useStyles = makeStyles({
    modal: {
        ...modal
    },
    text_message: props =>  ({
        fontSize: props.fontSize,
        fontFamily: props.fontFamily,
        left: window.screen.availWidth * 0.5 - getTextWidth(props.text, props.fontSize, props.fontFamily) * 0.5,
        top: window.screen.availHeight* 0.5 - props.fontSize * 0.48,
        lineWidth: 0,
    }),
});
