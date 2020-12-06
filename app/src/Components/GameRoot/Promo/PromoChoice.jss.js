import {makeStyles} from "@material-ui/core/styles";
import {availHeight, availWidth} from "../../helpers/windowMeasurments";

export const size = () => availHeight() * 0.1;

const promoChoice = {
    position: 'relative',
    width: size(),
    height: size(),
};

export const useStyles = makeStyles({
    normal: {
        ...promoChoice,
        backgroundColor: "none"
    },
    selected: {
        ...promoChoice,
        backgroundColor: "slateblue",
    },
});
