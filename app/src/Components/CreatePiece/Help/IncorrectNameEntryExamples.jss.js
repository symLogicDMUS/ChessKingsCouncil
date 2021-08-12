import { darken, makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";
import { availHeight } from "../../helpers/windowMeasurments";

export const useStyles = makeStyles(
    {
        incorrect_name_entry_examples: (props) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            height: "55vh",
            "@media screen and (min-width: 960px)": {
                flexDirection: "row",
                flexWrap: "nowrap",
            },
            "@media screen and (max-width: 960px)": {
                flexDirection: "column",
            },
        }),
        example: (props) => ({
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignItems: "center",
            justifyContent: "flex-start",
            marginTop: "2.5rem",
        }),
        warning: (props) => ({
            color: "#ec2525",
            fontSize: "1.5rem",
        }),
        text_field: (props) => ({
            marginRight: "2.5rem",

            /*root*/
            "& .MuiInputLabel-root": {
                color: darken(themes[props.theme].text, 0.2),
            },
            /*root when variant is outline*/
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: themes[props.theme].text,
            },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-input": {
                color: themes[props.theme].text,
            },

            /*hover*/
            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: themes[props.theme].text,
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
    },
    { index: 1 }
);
