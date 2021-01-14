import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {availHeight, availWidth} from "../../helpers/windowMeasurments";

export const promoChoiceSize = availHeight() * 0.2;

export const promoChoice = (fontSize, theme) => ({
    fontSize: fontSize,
    width: promoChoiceSize,
    height: promoChoiceSize,
    borderRadius: '0.01em',
    marginTop: '0.2em',
    cursor: 'pointer',
});

export const useStyles = makeStyles({
    normal: props => ({
        ...promoChoice(props.fontSize, props.theme),

    }),
    selected: props => ({
        ...promoChoice(props.fontSize, props.theme),
        backgroundColor: themes[props.theme].text,
    }),
});