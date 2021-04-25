import {themes} from "../../../styles/themes/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {imgFillDiv} from "../../../styles/imgFillDiv.jss";

export const useStyles = makeStyles({
    avatar_title: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: '3.25vh',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: '2.3vh',
        },
        color: themes[props.theme].text,
    }),
    subtitle1: props => ({
        fontSize: '0.1em',
    }),
    piece_img: props => ({
       ...imgFillDiv,
    }),
}, {index: 1});