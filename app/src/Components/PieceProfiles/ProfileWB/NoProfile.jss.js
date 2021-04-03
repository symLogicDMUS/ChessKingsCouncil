import {makeStyles} from "@material-ui/core/styles";
import {fontSize0023} from "../../styles/fontSizes.jss";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    profile_top: props => ({
        position: 'absolute',
        top: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }),
    profile_flexbox: props => ({
        zIndex: 5,
        position: 'fixed',
        top: '50%',
        left: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: themes[props.theme].fill,
        border: `0.035em solid ${themes[props.theme].outline}`,
    }),
    content: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
    }),
    caption: props => ({
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        lineHeight: '1em',
    }),
    inline_piece: props => ({
        width: '1.1em',
        height: '1.1em',
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
