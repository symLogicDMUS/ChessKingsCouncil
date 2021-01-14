import {modal} from "../../helpers/modal.jss";
import {promoChoiceSize} from "./PromoChoice.jss";
import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const promoChoicesHeight = promoChoiceSize
export const promoChoicesWidth = promoChoiceSize * 4 + promoChoiceSize * 0.2;

export const ok_button = (fontSize) => ({
    fontSize: fontSize,
    width: promoChoicesWidth,
    height: promoChoicesHeight * 0.12 * 1.5,
    borderRadius: "0.8em",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
});

export const useStyles = makeStyles({
    modal: props => ({
        ...modal
    }),
    img_group: props => ({
        display: "block",
        cursor: "pointer",
        float: "left",
        fontSize: props.fontSize,
        height: promoChoiceSize,
        width: promoChoicesWidth,
        borderRadius: "0.5em",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: themes[props.theme].fill,
        outline: `0.05em solid ${themes[props.theme].outline}`
    }),
});