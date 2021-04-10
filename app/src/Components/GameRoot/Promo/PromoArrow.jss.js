import {makeStyles} from "@material-ui/core/styles"
import {themes} from "../../styles/themes.jss";
import {promoChoicesSize} from "./Promo.jss";

export const useStyles = makeStyles((theme) => ({
    button: props => ({
        color: themes[props.theme].text,
        background: themes[props.theme].button_fill,
    }),
}), {index: 1});