import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {availHeight} from "../../helpers/windowMeasurments";

export const useStyles = makeStyles({
    incorrect_name_entry_examples: props => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: availHeight() * 0.55,
        '@media screen and (min-device-width: 1040px)': {
            flexDirection: 'row',
            flexWrap: 'nowrap',
        },
        '@media screen and (max-device-width: 1040px)': {
            flexDirection: 'column',
        },
    }),
    incorrect_entry: props => ({
        "& .MuiInputLabel-root": {
            color: '#f44336',
            fontSize: props.fontSize,
            fontFamily: 'Roboto-Light, Roboto'
        },
        "& .MuiOutlinedInput-input": {
            color: '#f44336',
            fontSize: props.fontSize,
            fontFamily: 'Roboto-Light, Roboto'
        },
    }),
}, {index: 1});

