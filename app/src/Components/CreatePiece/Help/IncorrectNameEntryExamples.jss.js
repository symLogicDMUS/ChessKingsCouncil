import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const incorrect_entry = (theme) => ({
    color: themes[theme].text,
    fontFamily: 'Roboto-Light, Roboto'
})

export const useStyles = makeStyles({
    incorrect_name_entry_examples: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
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

