import { makeStyles } from "@material-ui/core/styles";
import { imgFillDiv } from "../../Reuseables/imgFillDiv.jss";
import { upload_button_top } from "./Icon.jss";

export const useStyles = makeStyles({
    border: (props) => ({
        fontSize: props.fontSize,
        color: props.theme.checkmark,
        width: '7.25em',
        height: '7.5em',
    }),
    img: (props) => ({
        fontSize: props.fontSize,
        width: '6em',
        height: '6em',
    }),
});
