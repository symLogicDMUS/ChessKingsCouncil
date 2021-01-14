import {makeStyles} from "@material-ui/core/styles";
import {availHeight, availWidth} from "../../helpers/windowMeasurments";

export const promoChoiceSize = availHeight() * 0.1;

const promoChoice = {
    position: 'relative',
    width: promoChoiceSize,
    height: promoChoiceSize,
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
