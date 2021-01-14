import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {availHeight, availWidth} from "../../helpers/windowMeasurments";

export const promoChoiceSize = availHeight() * 0.1;

export const promoChoice = (fontSize, theme) => ({
    fontSize: fontSize,
    width: promoChoiceSize,
    height: promoChoiceSize,
    borderRadius: '0.01em',
    // backgroundColor: themes[theme].fill,
});

export const useStyles = makeStyles({
    normal: props => ({
        ...promoChoice(props.fontSize, props.theme),
    }),
    selected: props => ({
        ...promoChoice(props.fontSize, props.theme),
        outline: themes[props.theme].text,
    }),
});