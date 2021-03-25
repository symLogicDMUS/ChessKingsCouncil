import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {promoChoicesSize} from "./Promo.jss";


export const promoChoice = (fontSize, theme) => ({
    fontSize: fontSize,
    '@media screen and (min-width: 960px)': {
        width: promoChoicesSize.wide,
        height: promoChoicesSize.wide,
    },
    '@media screen and (max-width: 960px)': {
        width: promoChoicesSize.thin,
        height: promoChoicesSize.thin,
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