import { modal } from "../../helpers/modal.jss";
import { themes } from "../../styles/themes/themes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { darken } from "@material-ui/core/styles";

export const useStyles = makeStyles(
    {
        modal: {
            ...modal,
        },
        dialog_window: (props) => ({
            backgroundColor: themes[props.theme].modal_fill,
            border: `0.05rem solid ${themes[props.theme].odd_row}`,
        }),
        title: (props) => ({
            color: themes[props.theme].text,
        }),
        dialog_actions: (props) => ({
            paddingRight: 24,
        }),
        text_field: (props) => ({
            /*root*/
            "& .MuiInputLabel-root": {
                color: darken(themes[props.theme].text, 0.2),
            },
            /*root when variant is outline*/
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: themes[props.theme].outline,
            },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-input": {
                color: themes[props.theme].text,
            },

            /*hover*/
            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: themes[props.theme].outline,
            },
            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-input": {
                color: themes[props.theme].text,
            },
            "&:hover .MuiInputLabel-root": {
                color: themes[props.theme].text,
            },

            /*focused*/
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                    color: themes[props.theme].text,
                },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
                color: themes[props.theme].text,
            },
            "& .MuiInputLabel-root.Mui-focused": {
                color: themes[props.theme].text,
            },
        }),
        button: (props) => ({
            "@media screen and (min-width: 960px)": {
                fontSize: "2vh",
            },
            "@media screen and (max-width: 960px)": {
                fontSize: "2.3vh",
            },
            color: themes[props.theme].text,
        }),
        primary: (props) => ({
            color: themes[props.theme].button_text,
            backgroundColor: themes[props.theme].button_fill
        }),
        secondary: (props) => ({
            color: themes[props.theme].button_fill,
        }),
    },
    { index: 1 }
);
