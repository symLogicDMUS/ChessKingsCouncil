import {modal} from "../../helpers/modal.jss";
import {promoChoiceSize} from "./PromoChoice.jss";
import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const promoChoicesHeight = promoChoiceSize;
export const promoChoicesWidth = promoChoiceSize * 4 + promoChoiceSize * 0.2;

export const ok_button = (fontSize, theme) => ({
    fontSize: fontSize,
    width: promoChoicesWidth,
    height: promoChoicesHeight * 0.18,
    borderRadius: "0.8em",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: themes[theme].fill,
    // border: `0.01em solid ${themes[theme].outline}`
});

export const itemStyle = () => ({
    position: 'relative',
});

export const useStyles = makeStyles({
    modal: (props) => ({
        ...modal,
        zIndex: 7,
    }),
    promos: props => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    }),
    menu: props => ({
        fontSize: props.fontSize,
        height: promoChoiceSize*1.05,
        backgroundColor: themes[props.theme].odd_row,
        borderRadius: '0.1em'
    }),
    img_group: (props) => ({
        fontSize: props.fontSize,
        height: promoChoiceSize,
        width: promoChoicesWidth,
    }),
    item_active: props => ({
        outline: 'none',
    }),
});
