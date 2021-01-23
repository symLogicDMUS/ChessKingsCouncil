import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../styles/themes.jss";
import {fontSize0023, fontSize00301} from "../styles/fontSizes.jss";
import {imgFillDiv} from "../Reuseables/imgFillDiv.jss";

const size = '11.55em'

export const useStyles = makeStyles({
    profile_avatar: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSize0023
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSize00301,
        },
        height: '12.75em',
        width: size,
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Roboto-Light, Roboto',
    }),
    avatar_title: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSize0023,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSize00301,
        },
        height: '1.5em',
        width: '100%',
        textAlign: 'center',
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        backgroundColor: themes[props.theme].fill,
        borderTop: `0.05em solid ${themes[props.theme].outline}`,
        borderLeft: `0.05em solid ${themes[props.theme].outline}`,
        borderRight: `0.05em solid ${themes[props.theme].outline}`,
    }),
    avatar_window: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSize0023,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSize00301,
        },
        width: size,
        height: size,
        fontFamily: 'Roboto-Light, Roboto',
        backgroundColor: themes[props.theme].fill,
        border: `0.05em solid ${themes[props.theme].outline}`,
    }),
    piece_img: props => ({
       ...imgFillDiv,
    }),
});