import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes.jss";
import {imgFillDiv} from "../../Reuseables/imgFillDiv.jss";

export const useStyles = makeStyles({
    piece: props => ({
        zIndex: 0,
        width: '100%',
        height: '100%',
        background: 'none',
        fontSize: props.fontSize,
        color: props.isLightSqr ? themes[props.theme].sqr_text_light : themes[props.theme].sqr_text_dark,
    }),
    img: props => ({
        ...imgFillDiv,
    }),
})
