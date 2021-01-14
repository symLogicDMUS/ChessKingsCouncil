import { modal } from "../../helpers/modal.jss";
import { promoChoiceSize } from "./PromoChoice.jss";
import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes.jss";

export const promoChoicesHeight = promoChoiceSize;
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
    modal: (props) => ({
        ...modal,
        zIndex: 7,
    }),
    promos: (props) => ({
        fontSize: props.fontSize,
        height: promoChoiceSize,
        width: promoChoicesWidth,
    }),
    background: (props) => ({
        height: promoChoiceSize,
        width: promoChoicesWidth,
        marginTop: promoChoiceSize * 1.5,
        borderRadius: "0.05em",
        backgroundColor: themes[props.theme].modal_fill,
        outline: `0.05em solid ${themes[props.theme].outline}`,
        zIndex: -1,
    }),
});
