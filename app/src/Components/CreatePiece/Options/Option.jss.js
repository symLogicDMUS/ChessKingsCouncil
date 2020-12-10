/**See Options.jss */
import {makeStyles} from "@material-ui/core/styles"
import {imgFillDiv} from "../../Reuseables/imgFillDiv.jss";
import {availWidth} from "../../helpers/windowMeasurments";

export const useStyles = makeStyles({
    icon: {
        position: "absolute",
        // ...imgFillDiv,
        width: availWidth() * 0.005,
        height: availWidth() * 0.005,
    },
});
