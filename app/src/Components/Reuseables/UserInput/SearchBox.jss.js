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
        width: '1.6ch',
        height: '1.6ch',
        margin: 'auto',
        paddingLeft: '0.3em',

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
    lighten: props => ({
        backgroundColor: lighten(themes[props.theme].odd_row, 0.075),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.085),
        },
    }),
}), {index: 1});