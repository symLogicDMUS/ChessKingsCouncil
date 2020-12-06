import {modal} from "../../helpers/modal.jss";
import {availHeight, availWidth, height} from "../../helpers/windowMeasurments";
import {size  as promoChoiceSize} from "./PromoChoice.jss";

export const promoChoicesHeight = () => promoChoiceSize()
export const promoChoicesWidth = () => promoChoiceSize() * 4 + promoChoiceSize() * 0.2;
export const promoChoicesLeft = () => availWidth() * 0.5 - promoChoicesWidth() * 0.5;
export const promoChoicesTop = () => height() * 0.5 - promoChoicesHeight() * 0.5;
export const getFontSize = () => promoChoicesHeight() * 0.12;

export const ok_button = {
    position: "absolute",
    top: promoChoicesTop() + promoChoicesHeight(),
    left: promoChoicesLeft(),
    width: promoChoicesWidth(),
    fontSize: getFontSize(),
    height: getFontSize() * 1.5,
    borderRadius: "0.8em",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
};

export const styles = {
    promo_modal: {
        ...modal
    },
    img_group: {
        display: "block",
        zIndex: "inherit",
        cursor: "pointer",
        float: "left",
        fontSize: 15,
        height: promoChoiceSize(),
        width: promoChoicesWidth(),
        left: promoChoicesLeft(),
        top: promoChoicesTop(),
        backgroundColor: 'white',
        borderRadius: "0.5em",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        position: "absolute",
    },
};