import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {availHeight} from "../../helpers/windowMeasurments";

export const useStyles = makeStyles({
    incorrect_name_entry_examples: props => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: availHeight() * 0.55,
        '@media screen and (min-width: 960px)': {
            flexDirection: 'row',
            flexWrap: 'nowrap',
        },
        '@media screen and (max-width: 960px)': {
            flexDirection: 'column',
        },
    }),
    incorrect_entry: props => ({
        "& .MuiInputLabel-root": {
            fontSize: props.fontSize,
            fontFamily: 'Roboto-Light, Roboto'
        },
        "& .MuiOutlinedInput-input": {
            fontSize: props.fontSize,
            fontFamily: 'Roboto-Light, Roboto'
        },
    }),
    block_icons: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        transform: 'translate(0, -18em)'
    }),
    block_icon: props => ({
        fontSize: 'inherit',
       color: 'red',
       width: '8em',
       height: '8em',
    }),
}, {index: 1});

