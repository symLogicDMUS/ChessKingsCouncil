import {makeStyles} from "@material-ui/core/styles"
import {themes} from "../../styles/themes.jss";
import {promoChoiceSize} from "./PromoChoice.jss";

export const button = (fontSize, theme) => ({
    fontSize: fontSize,
    height: promoChoiceSize,
    width: '0.01em',
    lineHeight: 0,
    minWidth: 0,
    background: themes[theme].button_fill,
    color: themes[theme].text,
});

export const useStyles = makeStyles((theme) => ({
    button: props => ({
        fontSize: props.fontSize,
        height: promoChoiceSize,
        width: '0.01em',
        lineHeight: 0,
        minWidth: 0,
        background: themes[props.theme].button_fill,
        color: themes[props.theme].text,
    }),
}));
