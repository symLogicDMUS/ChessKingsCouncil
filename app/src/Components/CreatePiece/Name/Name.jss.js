import makeStyles from "@material-ui/core/styles/makeStyles";
import {fontSize002, fontSize0024} from "../../styles/fontSizes.jss";
import {themes} from "../../styles/themes.jss";

export const fontSizes = {
    desktop: fontSize002,
    mobile: fontSize002,
    ipx: fontSize002,
    ipad: fontSize0024,
}

export const genStyle = () => ({
});

export const useStyles = makeStyles({
    name: props => ({
        '@media screen and (min-width: 960px)': {
            width: '93%',
            marginLeft: '3.5%',
            marginBottom: '2vh',
        },
        '@media screen and (max-width: 960px)': {
            width: '100%'
        },

        /*root*/
        "& .MuiInputLabel-root": {
            color: themes[props.theme].outline,
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
            color: themes[props.theme].outline,
        },

        /*focused*/
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            color: themes[props.theme].text,
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: themes[props.theme].text,
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: themes[props.theme].text,
        },
    }),
    thin_screen: props => ({
        width: '100%',
    }),
}, {index: 1});