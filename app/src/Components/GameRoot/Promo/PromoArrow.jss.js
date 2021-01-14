import {makeStyles} from "@material-ui/core/styles"
import {themes} from "../../styles/themes.jss";
import {promoChoiceSize} from "./PromoChoice.jss";

export const useStyles = makeStyles((theme) => ({
    button: props => ({
        fontSize: props.fontSize,
        height: promoChoiceSize*1.04,
        width: '0.1em',
        lineHeight: 0,
        minWidth: 0,
        marginBottom: '0.1em',
        color: themes[props.theme].text,
        background: themes[props.theme].button_fill,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    }),
}));
