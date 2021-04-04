import {makeStyles} from "@material-ui/core/styles";
import {fontSize0023} from "../../styles/fontSizes.jss";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    no_profile: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'translate(0, 0.5rem)',
    }),
    caption: props => ({
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        lineHeight: '1em',
    }),
    inline_piece: props => ({
        width: '1.25rem',
        height: '1.25rem',
        marginLeft: '0.25em',
    }),
    close_icon: props => ({
        fontSize: fontSize0023,
        '@media screen and (min-width: 960px)': {
            width: "0.5em",
            height: "0.5em",
        },
        '@media screen and (max-width: 960px)': {
            width: "0.5em",
            height: "0.5em",
        },
    }),
}, {index: 1});
