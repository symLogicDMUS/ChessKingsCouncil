import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {availHeight} from "../../helpers/windowMeasurments";

export const useStyles = makeStyles({
    incorrect_name_entry_examples: props => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: availHeight() * 0.55,
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            flexDirection: 'row',
            flexWrap: 'nowrap',
        },
        '@media (max-aspect-ratio: 1/1)': {
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
});

