import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {promoChoicesSize} from "./Promo.jss";


export const promoChoice = (fontSize, theme) => ({
    fontSize: fontSize,
    '@media screen and (min-device-width: 1040px)': {
        width: promoChoicesSize.desktop,
        height: promoChoicesSize.desktop,
    },
    '@media screen and (max-device-width: 1040px)': {
        width: promoChoicesSize.mobile,
        height: promoChoicesSize.mobile,
    },
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
}, {index: 1});