import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    no_profile: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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
}, {index: 1});
