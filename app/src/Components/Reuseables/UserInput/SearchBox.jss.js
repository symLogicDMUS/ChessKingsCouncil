import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes.jss";
import {fade} from "@material-ui/core";
import {lighten} from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
     search: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: themes[props.theme].odd_row,
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.075),
        },
    }),
    icon: props => ({
        width: '1.1rem',
        height: '1.1rem',
        marginLeft: '0.35rem',
        color: themes[props.theme].text,
    }),
    input_root: props => ({
        color: themes[props.theme].text,
        width: '100%',
    }),
    input: props => ({
        height: '1ch',
        paddingLeft: '0.5em',
        transition: theme.transitions.create('width'),
    }),
}), {index: 1});