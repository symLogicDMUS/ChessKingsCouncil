/**See Options.jss */
import {makeStyles} from "@material-ui/core/styles"
import {imgFillDiv} from "../../Reuseables/imgFillDiv.jss";

export const optionButtonSize = 4;

export const useStyles = makeStyles({
    option: props => ({
        // position: "relative",
        fontSize: props.fontSize,
        top: '1em',
        width: `${optionButtonSize}em`,
        height: `${optionButtonSize}em`,
    }),
    label: {
        display: "flex",
        flexDirection: "column",
    },
    icon: {
        ...imgFillDiv,
    },
});