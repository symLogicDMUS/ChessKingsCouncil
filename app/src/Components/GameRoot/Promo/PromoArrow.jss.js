import {makeStyles} from "@material-ui/core/styles"
import {themes} from "../../styles/themes.jss";
import {promoChoicesSize} from "./Promo.jss";

export const useStyles = makeStyles((theme) => ({
    button: props => ({
        fontSize: props.fontSize,
        '@media screen and (min-width: 960px)': {
            height: promoChoicesSize.desktop*1.04,
        },
        '@media screen and (max-width: 960px)': {
            height: promoChoicesSize.mobile,
        },
        width: '0.1em',
        lineHeight: 0,
        minWidth: 0,
        marginBottom: '0.1em',
        color: themes[props.theme].text,
        background: themes[props.theme].button_fill,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    }),
}), {index: 1});