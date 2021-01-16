import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes.jss";


export const useStyles = makeStyles({
    piece: props => ({
        zIndex: '0',
        fontSize: props.fontSize,
        width: '100%',
        height: '100%',
        background: 'none',
        color: props.isLightSqr ? themes[props.theme].sqr_text_light : themes[props.theme].sqr_text_dark,
    }),
})